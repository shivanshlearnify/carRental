import { Link, useNavigate } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import MyContext from "../../context/MyContext";
import Loader from "../../components/loader/Loader";
import {
  FaCar,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { auth } from "../../firebase/FirebaseConfig";
import { PhoneMultiFactorGenerator, RecaptchaVerifier } from "firebase/auth";
import { multiFactor, PhoneAuthProvider } from "firebase/auth";
import toast from "react-hot-toast";
import { useContext, useState } from "react";

const UserDashboard = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("users"));
  const context = useContext(MyContext);
  const { loading, bookingInfo } = context;
  const bookingData = bookingInfo.filter((obj) => obj?.userid === user?.uid);
  const [verificationId, setVerificationId] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);

  const userauth = auth.currentUser;

  const handleMfa = async () => {
    toast.success("Verification code is generating.");
    const recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
      size: "invisible",
      callback: (response) => {
        return response;
      },
    });
    try {
      // Get Multi-Factor session
      const multiFactorSession = await multiFactor(userauth).getSession();

      // Setup Phone Number Verification
      const phoneInfoOptions = {
        phoneNumber: "+917895059555",
        session: multiFactorSession,
      };

      const phoneAuthProvider = new PhoneAuthProvider(auth);
      const verificationId = await phoneAuthProvider.verifyPhoneNumber(
        phoneInfoOptions,
        recaptchaVerifier
      );

      setVerificationId(verificationId);
      setIsCodeSent(true);
      toast.success("Verification code sent to your phone.");

      recaptchaVerifier.clear();
    } catch (error) {
      if (error.code == "auth/second-factor-already-in-use") {
        toast.error("user already enrolled");
      } else {
        toast.error(
          "Failed to send verification code. Please try again.     " + error
        );
      }
      recaptchaVerifier.clear();
    }
  };

  const handleRemoveMfa = async () => {
    try {
      toast.success("MFA factor is getting removed.");
      await userauth.reload();
      const mfaInfo = multiFactor(userauth).enrolledFactors;
      const factorToRemove = mfaInfo.find(
        (factor) => factor.displayName === "My personal phone number"
      );

      if (factorToRemove) {
        await multiFactor(userauth).unenroll(factorToRemove);
        toast.success("MFA factor removed successfully.");
      } else {
        toast.success("No matching MFA factor found.");
      }
    } catch (error) {
      toast.error("Error removing MFA factor:", error);
    }
  };

  const handleSubmit = async () => {
    if (verificationCode === "") {
      toast.error("Please enter the verification code.");
      return;
    }

    try {
      const cred = PhoneAuthProvider.credential(
        verificationId,
        verificationCode
      );
      const multiFactorAssertion = PhoneMultiFactorGenerator.assertion(cred);

      await multiFactor(auth.currentUser).enroll(
        multiFactorAssertion,
        "My personal phone number"
      );
      toast.success("MFA Enrolled Successfully");
      setIsCodeSent(false);
    } catch (error) {
      toast.error("Failed to verify the code. Please try again.");
    }
  };

  return (
    <Layout>
      <div>
        <div id="recaptcha"></div>
        <div className="bg-[#ff4c306c] text-xl font-bold flex flex-col gap-4 mt-[150px] justify-center items-center max-w-7xl mx-auto rounded-3xl py-16 sm:mx-2 shadow-md">
          <img
            className="w-[120px] self-center"
            src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
            alt="Car Icon"
          />
          <h2 className="text-center text-2xl">
            Name: <span className="text-white">{user.name}</span>
          </h2>
          <h2 className="text-center text-2xl">
            Email: <span className="text-white">{user.email}</span>
          </h2>
          <button className="bg-white p-2 rounded-2xl" onClick={handleMfa}>
            Add MFA
          </button>
          <button
            className="bg-white p-2 rounded-2xl"
            onClick={handleRemoveMfa}
          >
            Remove MFA
          </button>
          {isCodeSent && (
            <>
              <input
                className="rounded-lg px-4 py-3 text-lg focus:outline-none bg-gray-100 border border-gray-300"
                type="text"
                placeholder="Verification Code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
              />
              <button onClick={handleSubmit}>Submit</button>
            </>
          )}
        </div>
      </div>
      <div className="max-w-7xl mx-auto sm:mx-5">
        <div>
          <h2 className="text-3xl font-bold mt-5">
            Booking Info{" "}
            <span className="text-red-500">
              (All Information Will be Shared With You in your mail)*
            </span>
          </h2>
        </div>
        {bookingData.length === 0 ? (
          <p className="text-xl font-medium my-10 flex gap-2 sm:flex-col">
            Currently, there are no available car bookings.
            <h2>
              Skip to{" "}
              <span
                className="text-[#ff4d30] cursor-pointer"
                onClick={() => navigate("/")}
              >
                Homepage
              </span>
            </h2>
          </p>
        ) : (
          ""
        )}
        {loading && <Loader />}

        {bookingInfo
          .filter((obj) => obj?.userid === user?.uid)
          .map((info, index) => (
            <div
              key={index}
              className="my-14 max-w-lg bg-red-100 rounded-lg p-4 font-medium cursor-pointer font-sans shadow-md"
            >
              <h2 className="text-2xl font-bold mb-4">Booking Details</h2>
              <div className="flex items-center mb-2">
                <FaCar className="text-xl mr-2 text-red-500" />
                <span className="text-lg font-semibold">Booking Id:</span> #
                {info.id}
              </div>
              <div className="flex items-center mb-2">
                <FaCar className="text-xl mr-2 text-red-500" />
                <span className="text-lg font-semibold">Car Booked:</span>{" "}
                {info.carInfo.carType}
              </div>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-xl mr-2 text-red-500" />
                <span className="text-lg font-semibold">
                  Pickup Location:
                </span>{" "}
                {info.carInfo.pickUp}
              </div>
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-xl mr-2 text-red-500" />
                <span className="text-lg font-semibold">Pickup Date:</span>{" "}
                {info.carInfo.pickTime}
              </div>
              <div className="flex items-center mb-2">
                <FaMapMarkerAlt className="text-xl mr-2 text-red-500" />
                <span className="text-lg font-semibold">
                  Drop Location:
                </span>{" "}
                {info.carInfo.dropOff}
              </div>
              <div className="flex items-center mb-2">
                <FaCalendarAlt className="text-xl mr-2 text-red-500" />
                <span className="text-lg font-semibold">Drop Date: </span>{" "}
                {info.carInfo.dropTime}
              </div>
              <div className="flex items-center">
                <span className="text-lg font-semibold mr-2">
                  Booking Confirmation:
                </span>

                <FaCheckCircle className="text-green-500" />
                <p>Confirmed</p>
              </div>
            </div>
          ))}
      </div>
    </Layout>
  );
};

export default UserDashboard;

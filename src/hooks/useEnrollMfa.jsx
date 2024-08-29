import { multiFactor, PhoneAuthProvider } from "firebase/auth";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useEnrollMfa = ({ auth, phone, recaptchaVerifier }) => {
  const [verificationId, setVerificationId] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);

  useEffect(() => {
    const enrolling = async () => {
      try {
        

        // Get Multi-Factor session
        const multiFactorSession = await multiFactor(
          auth.currentUser
        ).getSession();

        // Setup Phone Number Verification
        const phoneInfoOptions = {
          phoneNumber: phone, // using the phone prop passed to the hook
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
        toast.error("Failed to send verification code. Please try again.");
        console.error("Error during MFA enrollment:", error);
      }
    };

    if (auth && phone && !isCodeSent) {
      enrolling();
    }
  }, [auth, phone, isCodeSent]);

  return { verificationId, isCodeSent };
};

export default useEnrollMfa;

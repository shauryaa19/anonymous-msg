import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { apiResponse } from "@/types/apiResponse";

export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode: string
) : Promise<apiResponse> {
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: 'Mystery message verification code',
            react: VerificationEmail({username, otp: verifyCode}),
          });
        return {success: true, message: "Verification email send successfully"}
    } catch (emailError) {
        console.error("Error sending verification email", emailError)
        return {success: false, message: "Failed to send verification email"}
    }
}



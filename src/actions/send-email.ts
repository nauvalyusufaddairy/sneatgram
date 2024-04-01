"use server";

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export default async function sendEmail(email: string, token: string) {
  const sesClient = new SESClient({
    region: "us-east-1",
    credentials: {
      accessKeyId: process.env.AACCESS_KEY_ID!,
      secretAccessKey: process.env.AACCESS_KEY_SECRET!,
    },
  });

  const params = {
    Destination: {
      ToAddresses: [email],
    },
    Message: {
      Body: {
        Text: {
          Data: "your verification code is \n" + token,
        },
      },
      Subject: {
        Data: "email verification service",
      },
    },
    Source: "no-reply@sneatgram.fullbrigth.com", // Replace with your sender email address
  };
  try {
    const command = new SendEmailCommand(params);
    const result = await sesClient.send(command);
    const res = result;
    console.log("reeessss", res);

    return { succes: JSON.stringify({ res }) };
  } catch (error) {
    console.log("errrrrrorororor", error);
    return { e: JSON.stringify({ error }) };
  }
}

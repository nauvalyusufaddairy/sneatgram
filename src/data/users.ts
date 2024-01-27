import prisma from "@/lib/dbConnect";
type FindUserStatus = {
  success: string;
  error: string;
};
export const getUserByEmail = async (email: string) => {
  console.log("im hits");
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (user) {
      return user;
    } else {
      return null;
    }
  } catch (e) {
    return null;
  }
};
export const findAllEmail = async () => {
  const data = await prisma.user.findMany();
  return data;
};

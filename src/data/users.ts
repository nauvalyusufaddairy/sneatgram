import prisma from "@/lib/dbConnect";
type FindUserStatus = {
  success: string;
  error: string;
};
export const getUserByEmail = async (email: string) => {
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

export const getUserByUsername = async (username: string) => {
  const data = await prisma.user.findUnique({ where: { username } });
  if (data) {
    return data;
  } else {
    return null;
  }
};

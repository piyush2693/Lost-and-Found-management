import bcrypt from "bcrypt";

// Hash the password
export const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.error("Error hashing password:", error);
    throw new Error("Hashing failed");
  }
};

// Compare the plain and hashed password
export const comparePassword = async (password, hashedPassword) => {
  try {
    return await bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.error("Error comparing passwords:", error);
    throw new Error("Comparison failed");
  }
};

import { clerkClient, getAuth } from "@clerk/express";
import type{ Request, Response } from "express";

export const assignRoleOnSignUp = async (req: Request, res: Response) => {
  try {
    // Get current user from auth
    const auth = getAuth(req);
    const currentUserId = auth.userId;

    if (!currentUserId) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    // Optional: Check if current user is admin
    const currentUser = await clerkClient.users.getUser(currentUserId);
    console.log(currentUser);


    // Update user metadata and role
    const updatedUser = await clerkClient.users.updateUserMetadata(currentUserId, {
      publicMetadata: {
        role: 'user', // admin, moderator, user, etc.
      }
    });

    res.json({
      success: true,
      user: {
        id: updatedUser.id,
        email: updatedUser.emailAddresses[0]?.emailAddress,
        role: updatedUser.publicMetadata.role,
        metadata: updatedUser.publicMetadata
      }
    });

  } catch (error) {
    console.error('Error assigning role:', error);
    res.status(500).json({
      error: 'Failed to assign role',
      details: error.message
    });
  }
};

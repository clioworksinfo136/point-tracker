import { defineStorage } from "@aws-amplify/backend";

/**
 * S3 storage for point photos. Any signed-in user can upload, view and
 * delete photos under the point-photos/ prefix (matches the shared-data model).
 */
export const storage = defineStorage({
  name: "pointPhotos",
  access: (allow) => ({
    "point-photos/*": [
      allow.authenticated.to(["read", "write", "delete"]),
    ],
  }),
});

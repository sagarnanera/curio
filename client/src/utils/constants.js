export const SERVER_URL = import.meta.env.VITE_SERVER_URL;
export const CLOUDINARY_NAME = import.meta.env.VITE_CLOUDINARY_NAME;
export const CLOUDINARY_API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY;
export const CLOUDINARY_API_SECRET = import.meta.env.VITE_CLOUDINARY_API_SECRET;
export const CLOUDINARY_UPLOAD_PRESET = import.meta.env
  .VITE_CLOUDINARY_UPLOAD_PRESET;
export const PAGINATION_LIMIT = 10;
export const PAGINATION_DEFAULT_PAGE = 1;

export const ROLES = {
  ADMIN: "admin",
  CONTENT_REVIEWER: "content reviewer",
  MODERATOR: "moderator",
  CONTRIBUTOR: "contributor",
};

export const TOOLBAR_BUTTONS = [
  { key: "mod+b", mark: "bold", type: "mark" },
  { key: "mod+i", mark: "italic", type: "mark" },
  { key: "mod+u", mark: "underline", type: "mark" },
  { key: "mod+shift+s", mark: "strikethrough", type: "mark" },
  { key: "mod+`", mark: "code", type: "mark" },
  { block: "list-ul", type: "block" },
  { block: "list-ol", type: "block" },
];

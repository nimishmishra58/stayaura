export const ENQUIRY_IMAGE_LIMIT = 6;
export const ENQUIRY_IMAGE_MAX_SIZE_MB = 5;

const allowedTypes = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
]);

export const validateEnquiryImages = (files) => {
  if (files.length > ENQUIRY_IMAGE_LIMIT) {
    return `You can upload up to ${ENQUIRY_IMAGE_LIMIT} images.`;
  }

  for (const file of files) {
    if (!allowedTypes.has(file.type)) {
      return "Only JPG, PNG, WEBP, and HEIC images are allowed.";
    }

    if (file.size > ENQUIRY_IMAGE_MAX_SIZE_MB * 1024 * 1024) {
      return `Each image must be ${ENQUIRY_IMAGE_MAX_SIZE_MB}MB or smaller.`;
    }
  }

  return "";
};

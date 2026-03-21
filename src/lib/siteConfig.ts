export const siteConfig = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Đức Đạt Aqua',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Chuyên cung cấp thiết bị, phụ kiện hồ cá cảnh và thủy sinh chất lượng cao: máy bơm, máy lọc, vi sinh, hóa chất thủy sinh và vật liệu lọc.',
  phoneRaw: process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW || '0962696589',
  phoneDisplay: process.env.NEXT_PUBLIC_CONTACT_PHONE_DISPLAY || '0962 6965 89',
  zaloUrl: process.env.NEXT_PUBLIC_CONTACT_ZALO_URL || 'https://zalo.me/0962696589',
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'Ducletuan20.11@gmail.com',
  address: process.env.NEXT_PUBLIC_CONTACT_ADDRESS || '1 Chúc Lý, P. Chương Mỹ, Hà Nội',
  facebookUrl: process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK,
  tiktokUrl: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK,
  tiktok2Url: process.env.NEXT_PUBLIC_SOCIAL_TIKTOK2,
  shopeeUrl: process.env.NEXT_PUBLIC_SHOP_SHOPEE,
  shopee2Url: process.env.NEXT_PUBLIC_SHOP_SHOPEE2,
  lazadaUrl: process.env.NEXT_PUBLIC_SHOP_LAZADA,
  lazada2Url: process.env.NEXT_PUBLIC_SHOP_LAZADA2,
};

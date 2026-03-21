import { siteConfig } from "@/lib/siteConfig";

const Footer = () => {
    return (
      <footer className="bg-gray-100 text-gray-600">
        <div className="container mx-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold text-green-600 mb-4">{siteConfig.name}</h3>
              <p>Chuyên cung cấp thiết bị và phụ kiện hồ cá cảnh, thủy sinh chất lượng cao.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Thông tin liên hệ</h3>
              <p>Địa chỉ: {siteConfig.address}</p>
              <p>Hotline: <a href={`tel:${siteConfig.phoneRaw}`} className="hover:text-green-500">{siteConfig.phoneDisplay}</a></p>
              <p>Email: <a href={`mailto:${siteConfig.email}`} className="hover:text-green-500">{siteConfig.email}</a></p>
              <p><a href={siteConfig.zaloUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green-500">Zalo: {siteConfig.phoneDisplay}</a></p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Mạng xã hội</h3>
              <ul className="space-y-2">
                {siteConfig.facebookUrl !== '#' && (
                  <li><a href={siteConfig.facebookUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green-500">📘 Facebook</a></li>
                )}

                <li><a href={siteConfig.tiktokUrl} target="_blank" rel="noopener noreferrer" className="hover:text-green-500">🎵 TikTok - Đức Đạt</a></li>
                <li><a href={siteConfig.tiktok2Url} target="_blank" rel="noopener noreferrer" className="hover:text-green-500">🎵 TikTok - Phụ kiện cá cảnh</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Mua hàng online</h3>
              <ul className="space-y-2">
                <li><a href={siteConfig.shopeeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">🛒 Shopee - Đức Đạt Aqua</a></li>
                <li><a href={siteConfig.shopee2Url} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">🛒 Shopee - Phụ kiện cá cảnh VN</a></li>
                <li><a href={siteConfig.lazadaUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">🛍️ Lazada - Cá cảnh Đức Đạt</a></li>
                <li><a href={siteConfig.lazada2Url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">🛍️ Lazada - Đạt Aqua</a></li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-8 border-t pt-4">
            <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;
  
// src/app/gioi-thieu/page.tsx
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="bg-white">
      <div className="relative h-80">
        <Image
          src="https://i.pinimg.com/1200x/eb/d2/35/ebd235b9217d3f961723be5aeff03f71.jpg"
          alt="Giới thiệu Đức Đạt Aqua"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Về Chúng Tôi</h1>
        </div>
      </div>

      <div className="container mx-auto p-8 md:p-12">
        <div className="prose lg:prose-lg max-w-4xl mx-auto text-justify">
          <h2>Đức Đạt Aqua: Chuyên Thiết Bị & Phụ Kiện Hồ Cá</h2>
          <p>
            Chào mừng bạn đến với Đức Đạt Aqua — đơn vị chuyên cung cấp thiết bị và phụ kiện hồ cá cảnh, thủy sinh chất lượng cao tại Hà Nội. Chúng tôi cung cấp đầy đủ các sản phẩm cần thiết để setup và vận hành hồ cá: máy bơm, máy lọc, vật liệu lọc, vi sinh, hóa chất thủy sinh và cốt nền.
          </p>
          <p>
            Với nhiều năm kinh nghiệm trong lĩnh vực cá cảnh và thủy sinh, Đức Đạt Aqua tự hào là đại lý phân phối các thương hiệu thiết bị uy tín như BaoYu, Sunsun, OGC cùng nhiều nhãn hàng chất lượng khác. Chúng tôi phục vụ cả khách lẻ và khách buôn sỉ trên toàn quốc qua Shopee và Lazada.
          </p>

          <h3>Sản Phẩm Chính</h3>
          <ul>
            <li><strong>Máy bơm & máy lọc:</strong> Đa dạng công suất từ bể mini đến hồ koi lớn, các thương hiệu BaoYu, Sunsun, OGC.</li>
            <li><strong>Vật liệu lọc:</strong> Bông lọc, túi đựng vật liệu lọc và các loại vật liệu lọc sinh học chất lượng cao.</li>
            <li><strong>Vi sinh:</strong> Multibio, Extra Bio, Zero Shock — khử độc, làm trong nước, xử lý mùi hôi tanh cho bể cá cảnh.</li>
            <li><strong>Hóa chất thủy sinh:</strong> Thuốc diệt rêu TL an toàn với động vật thủy sinh, cốt nền 5S TL bổ sung dinh dưỡng cho cây.</li>
          </ul>

          <h3>Tại Sao Chọn Đức Đạt Aqua?</h3>
          <p>
            Đức Đạt Aqua cam kết cung cấp sản phẩm chính hãng, giá cạnh tranh và tư vấn kỹ thuật tận tâm. Dù bạn là người mới bắt đầu hay đã có kinh nghiệm, chúng tôi luôn sẵn sàng hỗ trợ bạn chọn đúng thiết bị cho hồ cá của mình.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

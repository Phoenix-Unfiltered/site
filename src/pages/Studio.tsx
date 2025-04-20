
import { Camera } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Studio = () => {
  const photos = [
    {
      id: 1,
      src: "/lovable-uploads/9900bc55-c3be-4595-bd9c-25ff20df5bc7.png",
      description: "A solitary brown mushroom emerges from the forest floor, surrounded by green grass blades. Nature's quiet resilience in miniature."
    },
    {
      id: 2,
      src: "/lovable-uploads/f55af8ff-529c-449d-b351-351ac7ba6eaa.png",
      description: "Night fishing setup against a dramatic sky. The rod stretches across the frame while a campfire glows in the distance."
    },
    {
      id: 3,
      src: "/lovable-uploads/c070a8a6-bac4-488f-936d-5a9a1d4d1e3c.png",
      description: "Delicate horsetail plant reaching skyward, its geometric patterns creating a natural fractal against the soft background."
    },
    {
      id: 4,
      src: "/lovable-uploads/7c68aad6-e101-4282-a3da-e046363dfd1e.png",
      description: "Close-up of a mushroom's gills, revealing intricate patterns and textures nature creates in the smallest details."
    },
    {
      id: 5,
      src: "/lovable-uploads/38f073f2-1ae5-4342-b9d4-b54bcb08056b.png",
      description: "Dam release creating a powerful mist over the rushing water, trees standing resilient against the flood."
    },
    {
      id: 6,
      src: "/lovable-uploads/0edb072f-eda7-4373-8cc3-70cce931e96b.png",
      description: "A perfect rainbow arcs across the lake, fishing rod in the foreground pointing toward nature's color display."
    },
    {
      id: 7,
      src: "/lovable-uploads/c84e33de-e8c8-476a-85ad-033ceb327d76.png",
      description: "White oyster mushroom displaying its layered form, nestled among dried grass and pine needles."
    },
    {
      id: 8,
      src: "/lovable-uploads/779cc713-8b72-493d-a4f2-8f1e98dd28a9.png",
      description: "Eucalyptus trees silhouetted against an overcast sky, sunlight trying to break through the clouds."
    },
    {
      id: 9,
      src: "/lovable-uploads/b4a7169d-9f33-4329-bbfa-45f3b82279d5.png",
      description: "Sunset over the lake, dark tree silhouette framing the golden clouds and peaceful waters."
    },
    {
      id: 10,
      src: "/lovable-uploads/e79e6c4f-995c-4da8-83c3-136ebfe4955d.png",
      description: "Panoramic view of the lake, fishing rods set up along the grassy bank under a vast sky."
    },
    {
      id: 11,
      src: "/lovable-uploads/fd2ac116-f818-4352-996f-f713ec9ba868.png",
      description: "Angler casting their line into the sunlit waters, captured in the perfect moment of action and tranquility."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="section-container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="flex items-center justify-center gap-2 mb-4">
                <Camera className="text-phoenix-fire" />
                The Phoenix Studio
              </h1>
              <p className="text-phoenix-ash max-w-2xl mx-auto">
                Where light meets shadow, and ordinary moments become extraordinary. 
                A collection of moments captured through the lens of resilience and rebirth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo) => (
                <div key={photo.id} className="group relative overflow-hidden rounded-lg">
                  <img
                    src={photo.src}
                    alt={photo.description}
                    className="w-full h-[300px] object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <p className="text-white p-4 text-sm">{photo.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Studio;

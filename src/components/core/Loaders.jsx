import Layout from "./Layout";

export const BannerLoader = () => (
  <div className="skeleton-loader h-52 md:h-60 lg:h-80 rounded-lg" />
);

const ImageLoader = () => <div className="skeleton-loader w-full h-full" />;

const ItemTextLoader = () => (
  <div className="w-48 p-4">
    <div className="skeleton-loader w-full py-2" />
    <div className="skeleton-loader w-1/2 py-2" />
  </div>
);

export const HeadingLoader = () => <div className="py-4 skeleton-loader" />;

const ItemLoader = () => (
  <div className="w-52 h-48">
    <ImageLoader />
    <ItemTextLoader />
  </div>
);

export const CollectionLoaders = () => (
  <>
    <HeadingLoader />
    <div className="flex gap-4">
      <div className="w-48 h-48">
        <ImageLoader />
      </div>
      <div className="w-48 h-48">
        <ImageLoader />
      </div>
      <div className="w-48 h-48">
        <ImageLoader />
      </div>
      <div className="w-48 h-48">
        <ImageLoader />
      </div>
      <div className="w-48 h-48">
        <ImageLoader />
      </div>
    </div>
  </>
);

const ItemLoaders = () => (
  <div className="flex gap-4 flex-wrap">
    <ItemLoader />
    <ItemLoader />
    <ItemLoader />
    <ItemLoader />
    <ItemLoader />
    <ItemLoader />
  </div>
);

export const HomeLoader = () => {
  return (
    <Layout renderHeader={false}>
      <div className="px-4 md:px-16">
        <BannerLoader />
        <div className="py-8" />
        <CollectionLoaders />
        <div className="py-8" />
        <ItemLoaders />
        <div className="py-8" />
      </div>
    </Layout>
  );
};

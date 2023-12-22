import { useEffect, useId, useState } from "react";
import { Layout } from "../components/core"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';

import uploadIcon from '../assets/icons/upload-icon-alt.svg'
import closeIcon from '../assets/icons/close-icon.svg'
import { createNewProduct } from "../api/apis";



const tags = ["newest", "best seller"];
const categories = [
  "random", "home and living", "clothes", "babies wear",
  "flash sales", "deals", "electronics", "phones", "cosmetics and makeup",
  "books", "stationeries", "toys", "outdoors", "sports", "games", "beauty and personal care", 
  "accessories", "bags", "travel", "shoes", "sneakers", "shirts", "hairs", "instruments", 
  "computers", "tv", "dress", "softwares", "babies", "women", "men", "bed"
];

const ManageStore = () => {
    const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [images, setImages] = useState(null);
  
  const handleFiles = (evt) => {
    const files = Object.values(evt.target.files);
    setImages(files);
    console.log(images);
  };

  const removeImage = (index) => {
    const imgs = [...images];
    imgs.splice(index);
    setImages(imgs);
  };

    useEffect(() => {
      if (!user.isLoggedIn) {
        navigate("/");
      }
    }, [navigate, user.isLoggedIn]);

    useEffect(() => {
      document.title = `Bestore | Manage Product`;
    }, []);

    return (
      <Layout renderHeader={true}>
        <div className="mx-4 md:mx-16 my-8 bg-white rounded shadow-sm px-4 pb-8">
          <h1 className="font-bold text-xl text-gray-800 py-4">Manage Store</h1>
          <LoadById />
          <h2 className="font-bold text-xl text-gray-800 py-4 text-center pt-8">
            Create and Update Product
          </h2>
          <Form images={images}>
            <ImageInput images={images} onChange={handleFiles} removeImage={removeImage} />
            <Input
              label="Title"
              name="title"
              placeholder="Item title summary"
            />
            <Textarea
              label="Item description"
              name="description"
              placeholder="Detailed description"
            />
            <Input
              type={"number"}
              label="Price"
              name="price"
              placeholder="Item price"
            />
            <Input
              type={"number"}
              label="Discounted price"
              name="discount"
              placeholder="Discounted price"
            />
            <Input
              type={"number"}
              label="Discount (%)"
              name="percent"
              placeholder="Percentage discount (optional)"
            />
            <Input
              type={"number"}
              label="Quantity in stock"
              name="stock"
              placeholder="Quantity available for sale"
            />
            <RadioButtons options={categories} label="categories" />
            <RadioButtons options={tags} label="tags" />
          </Form>
        </div>
      </Layout>
    );
}

const Form = ({ images, children }) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = {};
    form.title = evt.target.title.value;
    form.description = evt.target.description.value;
    form.price = evt.target.price.value;
    form.discountedPrice = evt.target.discount.value;
    form.discount = evt.target.percent.value;
    form.stock = evt.target.stock.value;
    form.categories = evt.target.categories.value?.split(":");
    form.tags = evt.target.tags.value?.split(":");
    // form.images = evt.target.images.files;
    form.images = images;

    console.log(form)
    if (form.title && (form.price || form.discountedPrice) &&
      form.description && form.stock && form.images && form.images.length > 0) {
      createNewProduct(form)
    } else {
      alert("some important fields are empty")
    }
    
  }
  return (
    <form
      encType="mutipart/form-data"
      className="lg:w-3/5 lg:m-auto lg:border-2 lg:p-4 lg:rounded-sm"
      onSubmit={handleSubmit}
    >
      {children}
      <hr />
      <div className="py-4 flex items-center justify-center">
        <button className="px-6 py-2 mt-4 text-xl bg-green-900 hover:bg-red-500 font-semibold rounded-3xl text-white">Create Item</button>
      </div>
    </form>
  )
}

Form.propTypes = {
  images: PropTypes.array,
  children: PropTypes.node.isRequired
};

const ImageInput = ({ images, onChange, removeImage }) => {
  
  return (
    <div className="p-4 bg-gray-50">
      <div className="flex items-center justify-center">
        <label htmlFor="images" className="flex gap-3 items-center justify-center bg-gray-300 px-4 py-2 shadow rounded-3xl">
          <img src={uploadIcon} alt="choose file to upload" width={25} height={25} />
          <span className="text-xs font-semibold text-gray-800">Choose images</span>
        </label>
        <input
          type="file"
          accept=".jpeg, .jpg, .png, .webp"
          id="images"
          name="images"
          multiple
          onChange={onChange}
          className="hidden"
        />
      </div>
      <div className="flex items-center justify-center flex-wrap gap-4 pt-6">
        {images && images.map((image, i) => (
          <div key={image.name} className="relative w-32 h-32 overflow-hidden rounded-sm border-2">
            <img src={URL.createObjectURL(image)} alt={image.name} width={150} height={150} className="w-32 h-32 object-fill" />
            <img src={closeIcon} width={25} height={25}
              onClick={() => removeImage(i)}
              className="absolute top-0 right-0 bg-white rounded-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

ImageInput.propTypes = {
  images: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  removeImage: PropTypes.func.isRequired,
};

const Textarea = ({ label, name, placeholder}) => {
  const [description, setDescription] = useState('');
  const id = useId();

  return (
    <div className="flex flex-col py-2">
      <label htmlFor={id} className="text-gray-800 font-semibold text-md ">
        {label}
      </label>
      <textarea
        value={description}
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={({ target }) => setDescription(target.value)}
        className="resize-y min-h-[150px] font-thin px-4 py-2 border bg-gray-100 rounded-sm focus:bg-gray-50 focus:outline-green-900"
      />
    </div>
  );
}

Textarea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

const RadioInput = ({ value, onChange }) => {
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (selected) {
      onChange(value);
    }
  }, [selected]);

  useEffect(() => {
    if (value === "random") {
      setSelected(true);
      onChange(value);
    }
  }, [selected]);

  return (
    <div
      className={` transition-all bg-gray-200 px-4 py-2 rounded-3xl cursor-pointer ${
        selected ? "shadow-sm" : ""
      }  shadow-green-900 flex items-center gap-2 justify-start`}
      onClick={() => setSelected(!selected)}
    >
      <div
        className={`w-6 h-6 rounded-full bg-white border-2 border-gray-300 ${
          selected ? "border-green-900 border-[5px]" : ""
        }`}
      />
      <div className="text-sm font-semibold text-gray-800">{value}</div>
    </div>
  );
}
RadioInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func 
};

const RadioButtons = ({ options, label }) => {
  const [choices, setChoices] = useState([]);
  const handleChoice = (choice) => {
    setChoices([...choices, choice]);
  }
  return (
    <div className="pb-4">
      <p className="font-semibold text-md text-gray-800">Choose all that apply ({label})</p>
      <div className="flex items-center justify-start gap-4 flex-wrap">
        {options.map((item, i) => (
          <RadioInput value={item} key={item + "-" + i} onChange={handleChoice} />
        ))}
      </div>
      <input type="hidden" value={choices.join(":")} name={label} id={label} />
    </div>
  )
}
RadioButtons.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
};

const Input = ({ label, type, name, placeholder }) => {
  const [value, setValue] = useState('');
  const id = useId();

  return (
    <div className="flex flex-col py-2">
      <label htmlFor={id} className="text-gray-800 font-semibold text-md ">
        {label}
      </label>
      <input
        type={type ? type : "text"}
        id={id}
        name={name}
        value={value}
        onChange={({ target }) => setValue(target.value)}
        placeholder={placeholder}
        className="text-sm font-semibold px-4 py-2 border bg-gray-100 rounded-sm focus:bg-gray-50 focus:outline-green-900"
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
}

const LoadById = () => {
    const [id, setId] = useState('');

    return (
      <div className="py-2 flex justify-start items-center gap-4">
        <input
          type="text"
          value={id}
          onChange={({ target }) => setId(target.value)}
          placeholder="Load product by ID"
          className="text-sm font-semibold px-4 py-2 border bg-gray-100 rounded-sm focus:bg-gray-50 focus:outline-green-900"
        />
        <button 
          className="text-sm text-white font-semibold px-4 py-2 rounded-3xl bg-green-900 hover:bg-red-500">
          Load product
        </button>
      </div>
    );
}

export default ManageStore;
import { useQuery, gql } from "@apollo/client";
import img from "../assets/react.svg";
const Products = () => {
  const GET_LOCATIONS = gql`
    query GetLocations {
      products(
        search: "string"
        filter: {}
        pageSize: 20
        currentPage: 1
        sort: {}
      ) {
        items {
          alt_text
          amstcred_price_type
          brand
          canonical_url
          clth_color
          clth_for
          clth_material
          color
          country_of_manufacture
          dimensions
          exclude_in_characteristics
          genetic_description
          genetic_filter
          gift_message_available
          id
          stock_status
          sku
          image {
            label
            path
            url
          }
          price_range {
            maximum_price {
              final_price {
                value
                currency
              }
            }
          }
        }
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log(data);
  if (loading)
    return (
      <p>
        {" "}
        <img
          className="animate-spin ease-in m-auto mt-[22rem] flex items-center justify-center"
          src={img}
          alt=""
        />
      </p>
    );
  if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="flex flex-wrap justify-center gap-16">
      {data?.products?.items.map(
        ({ image, id, stock_status, sku, price_range }) => (
          <div
            key={id}
            className="flex flex-col w-72  bg-slate-50 rounded py-4"
          >
            <img src={image.url} className="w-[100%] h-72" />
            <h5 className="right-0 ml-[12rem] text-green-800 font-bold text-sm px-2 py-1 mt-2 bg-green-100">
              {stock_status.toLowerCase()}
            </h5>
            <h4 className="text-lg">{image.label}</h4>
            <p className="font-mono font-thin text-sm  text-gray-600">
              SKU:{sku}
            </p>
            <span className="font-light text-sm">
              From: {price_range.maximum_price.final_price.value}{" "}
              {price_range.maximum_price.final_price.currency}{" "}
            </span>
          </div>
        )
      )}
    </div>
  );
};

export default Products;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchServicesStart } from "../../services/servicesSlice";

const Services = () => {
  // Dispatch function to send actions to the store
  const dispatch = useDispatch();
  // Select the necessary data from store
  const { services, loading, error } = useSelector((state) => state.services);

  // useEffect hook to fetch services when the component mounts
  useEffect(() => {
    // Dispatch the action to start fetching services
    dispatch(fetchServicesStart());
  }, [dispatch]);

  // Loading message if data is still loading
  if (loading) {
    return <div>Loading...</div>;
  }
  // Error message if there is any error
  if (error) {
    return <div>Error: {error}</div>;
  }

  // We create a shallow copy of the services array before sorting, we need to sort based on service order
  const sortedServices = [...services].sort(
    (a, b) => a.service_order - b.service_order
  );

  return (
    <div className="services-container font-montserrat px-4 sm:px-8 md:px-16 lg:px-28 py-10 sm:py-16 lg:py-20 bg-[#f4f4f4]">
      {/* The data is looped through and rendered from here */}
      {sortedServices.map((service, index) => (
        <div
          key={service.id}
          className={`service-item flex flex-col lg:flex-row ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center text-center lg:text-left lg:items-start justify-center py-6 sm:py-8 lg:py-10`}
        > {/* We use conditions here for display in larger screens and smaller screens, we need row and row reverse for large screens and column for smaller */}
          <div className="icon-container mb-6 lg:mb-0 lg:w-5/12 flex justify-center">
            <img src={service.icon} alt={service.title} className="w-full lg:w-[480px]" />
          </div>
          <div className="content-container flex flex-col items-center lg:items-start lg:w-1/2 px-4 lg:px-8">
            <div className="photo mb-4">
              <img src={service.photo} alt={service.title} className="w-12 h-12 md:w-16 md:h-16" />
            </div>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-7">
              {service.title}
            </h3>
            {/* dangerouslySetInnerHTML is need her as the data for description has <p> which is rendered as text rather than html */}
            <div
              className="description1 mb-4 text-sm md:text-base"
              dangerouslySetInnerHTML={{ __html: service.description1 }}
            />
            {service.description2 ? (
              <div
                className="description2 bg-[#e9ebff] mt-6 md:mt-8 px-4 py-6 sm:px-6 sm:py-7 text-[.875rem] md:text-[.938rem]"
                dangerouslySetInnerHTML={{ __html: service.description2 }}
              />
            ) : (
              <div className="description2 bg-[#e9ebff] h-12 mt-6 md:mt-8 w-full" />
            )} {/* An empty box is rendered when there is no description as per the live website design */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;

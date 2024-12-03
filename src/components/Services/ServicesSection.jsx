import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchServicesStart } from '../../services/servicesSlice';

const Services = () => {
  const dispatch = useDispatch();
  const { services, loading, error } = useSelector((state) => state.services);

  useEffect(() => {
    dispatch(fetchServicesStart());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Need to create copy of service then sort it
  const sortedServices = [...services].sort((a, b) => a.service_order - b.service_order);

  return (
    <div className="services-container px-28 bg-[#f4f4f4]">
      {sortedServices.map((service, index) => (
        <div
          key={service.id}
          className={`service-item flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center py-8`}
        >
          {/* Icon */}
          <div className="icon-container w-1/2">
            <img src={service.icon} alt={service.title} className="w-5/6" />
          </div>

          {/* Content */}
          <div className="content-container w-1/2 px-8">
            <div className="photo mb-4">
              <img src={service.photo} alt={service.title} className="w-max" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
             {/* Need to use dangerouslySetInnerHTML={{ __html: service.description1 }} as if we directly render it shows <p> as content not html elements */}
            <div
              className="description1 mb-4"
              dangerouslySetInnerHTML={{ __html: service.description1 }}
            />
            {/* Conditional rendering so that there can be empty box */}
            {service.description2 ? (
              <div
                className="description2 bg-[#e9ebff] px-6 py-7"
                dangerouslySetInnerHTML={{ __html: service.description2 }}
              />
            ) : (
              <div className="description2 bg-[#e9ebff] h-12" /> // Empty purple field if no description2
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;

import faqImage from '../../assets/faq.jpg'
const Faq = () => {
    return (
        <div className='flex items-center justify-center gap-6 px-8'>
            <div>
                <img src={faqImage} className='w-full' alt="" />
            </div>
            <div className="space-y-4 my-8">
                <div className="collapse collapse-arrow bg-blue-100 rounded-lg shadow-md">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium text-blue-800">What is your return policy?</div>
                    <div className="collapse-content text-gray-700">
                        <p>
                            We offer a 30-day return policy for unused and undamaged products in their original packaging. To initiate a return, please contact our support team with your order details.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-blue-100 rounded-lg shadow-md">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium text-blue-800">How long does shipping take?</div>
                    <div className="collapse-content text-gray-700">
                        <p>
                            Shipping typically takes 5-7 business days within the country. International shipping may vary from 10-15 days based on location. Expedited shipping options are available at checkout.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-blue-100 rounded-lg shadow-md">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium text-blue-800">Do you offer a warranty on products?</div>
                    <div className="collapse-content text-gray-700">
                        <p>
                            Yes, we offer a 1-year warranty on all electronic products. This warranty covers any manufacturing defects or issues with the product under normal use.
                        </p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-blue-100 rounded-lg shadow-md">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium text-blue-800">How can I track my order?</div>
                    <div className="collapse-content text-gray-700">
                        <p>
                            Once your order has shipped, you will receive a tracking link via email. You can use this link to monitor your shipment’s progress in real-time.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Faq;

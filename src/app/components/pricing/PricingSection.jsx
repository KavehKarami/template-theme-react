import React from 'react';
import PricingCard from '../shared/cards/PricingCard';

const PricingSection = () => {
  return (
    <section className="container pt-3 mb-5 pricing-section d-flex justify-content-center align-items-center flex-wrap">
      <PricingCard imgURL={require('../../../assets/img/bronze.png')} title="لورم ایپسوم" price="3">
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li className="doesnt-have">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li className="doesnt-have">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li className="doesnt-have">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li className="doesnt-have">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li className="doesnt-have">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li className="doesnt-have">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
      </PricingCard>

      <PricingCard isGold={true} imgURL={require('../../../assets/img/gold.png')} title="لورم ایپسوم" price="6">
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
      </PricingCard>

      <PricingCard imgURL={require('../../../assets/img/silver.png')} title="لورم ایپسوم" price="5">
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li className="doesnt-have">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li className="doesnt-have">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
        <li className="doesnt-have">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ است.</li>
      </PricingCard>
    </section>
  );
}

export default PricingSection;
import React from 'react';
import CardBox from '../shared/card/CardBox';
import CardContainer from '../shared/card/CardContainer';
import CardSection from '../shared/card/CardSection';
import WorkSampleCard from '../shared/cards/WorkSampleCard';

const WorkSampleSection = () => {
  return (
    <CardSection title="برخی از نمونه کار های ما">
      <CardContainer>
        <CardBox>
          <WorkSampleCard titr="لندینگ پیج روبیکا" title="لورم ایپسوم" imgURL={require('../../../assets/img/rubika.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
        </CardBox>

        <CardBox>
          <WorkSampleCard titr="لندینگ پیج روبیکا" title="لورم ایپسوم" imgURL={require('../../../assets/img/rubika.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
        </CardBox>
      </CardContainer>

      <CardContainer>
        <CardBox>
          <WorkSampleCard titr="لندینگ پیج روبیکا" title="لورم ایپسوم" imgURL={require('../../../assets/img/rubika.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
        </CardBox>

        <CardBox>
          <WorkSampleCard titr="لندینگ پیج روبیکا" title="لورم ایپسوم" imgURL={require('../../../assets/img/rubika.png')} description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است." />
        </CardBox>
      </CardContainer>
    </CardSection>
  );
}

export default WorkSampleSection;
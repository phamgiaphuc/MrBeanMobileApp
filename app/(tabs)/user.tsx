import { ScrollView } from 'react-native';
import React from 'react';
import BasicInfo from '@/components/user/BasicInfo';
import CGcontributed from '@/components/user/CGcontributed';
import ExchangeMap from '@/components/user/ExchangeMap';
import RecyclingProducts from '@/components/user/RecyclingProducts';

const Page = () => {
  return (
    <ScrollView style={{ paddingHorizontal: 10 }}>
      <BasicInfo avatarSource={require('@/assets/images/avatar/img.png')} name={'Thành Danh'} />
      <CGcontributed contributed="100" earned="0.25" times="30" />
      <ExchangeMap mapSource={require('@/assets/images/map/map.png')} />
      <RecyclingProducts
        productImgSource={[
          require('@/assets/images/products/1.png'),
          require('@/assets/images/products/2.png'),
          require('@/assets/images/products/3.png'),
          require('@/assets/images/products/4.png'),
          require('@/assets/images/products/5.png'),
          require('@/assets/images/products/6.png'),
        ]}
      />
    </ScrollView>
  );
};

export default Page;

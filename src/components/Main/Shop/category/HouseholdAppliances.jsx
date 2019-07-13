import React from 'react';
import ShopTemplate from '../../../common/ShopTemplate/ShopTemplate';
import { householdAppliancesItems } from '../../../../data-image/data';

const HouseholdAppliancesItems = () => (
  <ShopTemplate title="Побутова техніка" items={householdAppliancesItems} />
);

export default HouseholdAppliancesItems;

import React from 'react';
import ShopTemplate from '../../../common/ShopTemplate/ShopTemplate';
import { householdAppliancesItems } from '../../../../data/data';

const HouseholdAppliancesItems = () => (
  <ShopTemplate title="Побутова техніка" items={householdAppliancesItems} />
);

export default HouseholdAppliancesItems;

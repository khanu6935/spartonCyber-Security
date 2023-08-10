import React, { useState } from 'react';
import SelectFilter from './FilterComponents/SelectFilter';
import FilterResizeButton from './FilterComponents/FilterResizeButton';

import FilterListView from './FilterComponents/FilterListView/FilterListView';

export default function FilterBar() {
  const [resizeFilter, setResizeFilter] = useState(false);
  return (
    <div style={{ width: '100%' }}>
      <SelectFilter />
      {resizeFilter ? <FilterListView /> : null}
      <FilterResizeButton resizeFilter={resizeFilter} setResizeFilter={setResizeFilter} />
    </div>
  );
}

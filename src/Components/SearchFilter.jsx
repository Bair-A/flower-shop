import React, { useState } from 'react';

function SearchAndFilter() {
   const [searchTerm, setSearchTerm] = useState('');
   const [selectedFilter, setSelectedFilter] = useState('');

   // Обработчик изменения ввода поискового запроса
   const handleSearchInput = (event) => {
      setSearchTerm(event.target.value);
   };

   // Обработчик изменения выбранного фильтра
   const handleFilterChange = (event) => {
      setSelectedFilter(event.target.value);
   };

   // Функция фильтрации элементов
   const filterItems = (items) => {
      return items.filter(item => {
         // Проверяем, соответствует ли элемент выбранному фильтру
         if (selectedFilter && item.filter !== selectedFilter) {
            return false;
         }
         // Проверяем, содержит ли элемент поисковый запрос
         return item.name.toLowerCase().includes(searchTerm.toLowerCase());
      });
   };

   // Список элементов, который нужно отфильтровать
   const items = [
      { id: 1, name: 'Apple', filter: 'fruit' },
      { id: 2, name: 'Carrot', filter: 'vegetable' },
      { id: 3, name: 'Banana', filter: 'fruit' },
      { id: 4, name: 'Broccoli', filter: 'vegetable' },
   ];

   // Фильтруем элементы
   const filteredItems = filterItems(items);

   return (
      <div>
         <input type="text" value={searchTerm} onChange={handleSearchInput} placeholder="Search..." />
         <select value={selectedFilter} onChange={handleFilterChange}>
            <option value="">All</option>
            <option value="fruit">Fruit</option>
            <option value="vegetable">Vegetable</option>
         </select>
         <ul>
            {filteredItems.map(item => (
               <li key={item.id}>{item.name} ({item.filter})</li>
            ))}
         </ul>
      </div>
   );
}

export default SearchAndFilter;
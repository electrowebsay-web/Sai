import * as XLSX from 'xlsx';
import { MenuItem } from '../data/menuData';

export const parseExcelMenu = (file: File): Promise<MenuItem[]> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const data = e.target?.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        
        // Assuming the first sheet has the menu
        const firstSheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[firstSheetName];
        
        // Convert to JSON
        const rawData = XLSX.utils.sheet_to_json<any>(sheet);
        
        const parsedMenu: MenuItem[] = rawData.map((row: any, index: number) => ({
          id: `excel-${index}`,
          name: row['Item Name'] || row['Name'] || row['Dish'] || 'Unknown Item',
          description: row['Description'] || row['Details'] || 'Delicious specialty',
          price: parseFloat(row['Price']) || parseFloat(row['Cost']) || 0,
          category: row['Category'] || row['Type'] || 'Other',
          spicy: row['Spicy'] ? String(row['Spicy']).toLowerCase() === 'yes' : false,
          bestseller: row['Bestseller'] ? String(row['Bestseller']).toLowerCase() === 'yes' : false,
        })).filter(item => item.price > 0 && item.name !== 'Unknown Item');

        resolve(parsedMenu);
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = (error) => reject(error);
    reader.readAsBinaryString(file);
  });
};

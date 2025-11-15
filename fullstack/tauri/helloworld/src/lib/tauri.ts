import { invoke } from "@tauri-apps/api/core";

export interface AppData {
  transactions: any[];
  categories: any[];
  settings: any;
}

export async function saveData(data: AppData): Promise<string> {
  try {
    const jsonData = JSON.stringify(data);
    return await invoke('save_data', { data: jsonData });
  } catch (error) {
    console.error('Error saving data:', error);
    throw error;
  }
}

export async function loadData(): Promise<AppData | null> {
  try {
    const result = await invoke<string>('load_data');
    if (!result || result === '{}') {
      return null;
    }
    return JSON.parse(result);
  } catch (error) {
    console.error('Failed to load data:', error);
    return null;
  }
}

export async function exportCSV(csvData: string, fileName: string) {
  try {
    return await invoke('export_csv', { data: csvData, fileName });
  } catch (error) {
    console.error('Failed to export CSV:', error);
    throw error;
  }
}

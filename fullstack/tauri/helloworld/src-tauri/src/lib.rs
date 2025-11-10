use serde::{Deserialize, Serialize};
use std::fs;
use std::path::PathBuf;

#[derive(Debug, Serialize, Deserialize)]
struct AppData {
    transactions: serde_json::Value,
    categories: serde_json::Value,
    settings: serde_json::Value,
}

fn get_data_path() -> PathBuf {
    let mut path = dirs::data_local_dir().unwrap_or_else(|| PathBuf::from("."));
    path.push("finance-tracker");
    fs::create_dir_all(&path).ok();
    path.push("data.json");
    path
}

#[tauri::command]
fn save_data(data: String) -> Result<String, String> {
    let path = get_data_path();
    fs::write(&path, data).map_err(|e| e.to_string())?;
    Ok("Data saved successfully".to_string())
}

#[tauri::command]
fn load_data() -> Result<String, String> {
    let path = get_data_path();
    
    if !path.exists() {
        return Ok(String::from("{}"));
    }
    
    fs::read_to_string(&path).map_err(|e| e.to_string())
}

#[tauri::command]
fn export_csv(data: String, filename: String) -> Result<String, String> {
    let mut path = dirs::document_dir().unwrap_or_else(|| PathBuf::from("."));
    path.push(filename);
    
    fs::write(&path, data).map_err(|e| e.to_string())?;
    Ok(path.to_string_lossy().to_string())
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![save_data, load_data, export_csv])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

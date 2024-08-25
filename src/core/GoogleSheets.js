export class GoogleSheetsAPI {
    static table_api_key = null;
    static table_id = null;
    static drive_api_key = null;

    static loadCredentials() {
        if (this.table_api_key && this.table_id && this.drive_api_key) {
            return Promise.resolve();
        }

        return fetch('/credentials.json')
            .then(response => response.json())
            .then(credentials => {
                this.table_api_key = credentials.table_api_key;
                this.table_id = credentials.table_id;
                this.drive_api_key = credentials.drive_api_key;  // Добавляем ключ API для доступа к Google Drive
            })
            .catch(error => {
                console.error('Failed to load credentials:', error);
                throw error;
            });
    }

    static convertTableToJson(tableData) {
        const headers = tableData[0];

        return Promise.all(tableData.slice(1).map(async row => {
            const obj = {};
            for (let index = 0; index < headers.length; index++) {
                const header = headers[index];
                if (header === "photos") {
                    obj[header] = row[index] ? row[index].split('\n') : [];
                } else {
                    obj[header] = row[index] || '';
                }
            }
            return obj;
        }));
    }

    static fetchImageFromDrive(driveUrl) {
        const fileId = this.extractFileId(driveUrl);
        if (!fileId) {
            console.error('Invalid Google Drive URL:', driveUrl);
            return Promise.resolve('');  // Возвращаем пустую строку, если URL недействителен
        }

        const url = `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media&key=${this.drive_api_key}`;

        return fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch image from Google Drive: ${response.statusText}`);
                }
                return response.url; // Возвращаем прямую ссылку на изображение
            })
            .catch(error => {
                console.error('Error fetching image:', error);
                return '';  // Возвращаем пустую строку в случае ошибки
            });
    }

    static extractFileId(driveUrl) {
        const match = driveUrl.match(/[-\w]{25,}/);
        return match ? match[0] : null;
    }

    static getData(range) {
        return this.loadCredentials().then(() => {
            const url = `https://sheets.googleapis.com/v4/spreadsheets/${this.table_id}/values/${range}?key=${this.table_api_key}`;

            return fetch(url)
                .then(response => response.json())
                .then(data => this.convertTableToJson(data.values))
                .catch(error => {
                    console.error('Failed to fetch data from Google Sheets:', error);
                    throw error;
                });
        });
    }
}

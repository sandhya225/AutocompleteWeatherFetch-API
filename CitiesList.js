export function CitiesData() {
    return [
        { "title": "Adilabad", "rank": "1", "id": "tt0111161" },
        { "title": "Hyderabad", "rank": "2", "id": "tt0068646" },
        { "title": "Karimnagar", "rank": "3", "id": "tt0071562" },
        { "title": "Khammam", "rank": "4", "id": "tt0110912" },
        { "title": "Mahabubnagar", "rank": "5", "id": "tt0060196" },
        { "title": "Medak", "rank": "6", "id": "tt0468569" },
        { "title": "Nalgonda", "rank": "7", "id": "tt0050083" },
        { "title": "Nizamabad", "rank": "8", "id": "tt0108052" },
        { "title": "Rangareddi", "rank": "9", "id": "tt0167260" },
        { "title": "Warangal", "rank": "10", "id": "tt0137523" }
    ]
}

export function renderCityTitle(state, val) {
    return (
        state.title.toLowerCase().indexOf(val.toLowerCase()) !== -1
    );
}
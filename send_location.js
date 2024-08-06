const map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let marker;

function updatePosition(position) {
  const { latitude, longitude } = position.coords;

  if (!marker) {
    marker = L.marker([latitude, longitude]).addTo(map);
    map.setView([latitude, longitude], 13);
  } else {
    marker.setLatLng([latitude, longitude]);
  }
}

function handleError(error) {
  console.error('位置情報の取得に失敗しました', error);
}

if (navigator.geolocation) {
  navigator.geolocation.watchPosition(updatePosition, handleError, {
    enableHighAccuracy: true,
    maximumAge: 0,
    timeout: 1000
  });
} else {
  alert('このブラウザでは位置情報がサポートされていません');
}
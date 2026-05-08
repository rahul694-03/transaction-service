
import http from 'k6/http';

export default function () {

  http.post(
    'http://localhost:8080/api/transfer',
    JSON.stringify({
      senderId: "1",
      receiverId: "2",
      amount: 100
    }),
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );
}

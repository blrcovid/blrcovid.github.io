export default async function request(url, method='GET', body={}, headers={"Content-Type": "application/json"}) {
    let response;
    if(method === "GET")
    response = await fetch(url, {method: method, headers: headers});
    else
    response = await fetch(url, {method: method, headers: headers, body: JSON.stringify(body)});
    return response.json();
}
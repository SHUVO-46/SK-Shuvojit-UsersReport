
const okUIDs = ['12345', '67890', '55555']; // Example OK UID list

function login() {
    const u = document.getElementById('username').value;
    const p = document.getElementById('password').value;
    if (users[u] === p) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('main-section').style.display = 'block';
    } else {
        document.getElementById('login-error').innerText = 'Your username or password wrong';
    }
}

function processUID() {
    const input = document.getElementById('uid-input').value.trim();
    const uids = input.split(/\s+/);
    const tableBody = document.querySelector('#result-table tbody');
    tableBody.innerHTML = '';

    let okCount = 0;
    let returnCount = 0;
    const rate = 7.5;

    uids.forEach(uid => {
        const row = document.createElement('tr');
        const uidCell = document.createElement('td');
        uidCell.innerText = uid;
        const statusCell = document.createElement('td');

        if (okUIDs.includes(uid)) {
            statusCell.innerText = '✅ OK';
            okCount++;
        } else {
            statusCell.innerText = '🔄 Return';
            returnCount++;
        }

        row.appendChild(uidCell);
        row.appendChild(statusCell);
        tableBody.appendChild(row);
    });

    document.getElementById('total-uid').innerText = uids.length;
    document.getElementById('ok-uid').innerText = okCount;
    document.getElementById('return-uid').innerText = returnCount;
    document.getElementById('amount').innerText = (okCount * rate).toFixed(2);
    document.getElementById('earning').innerText = (okCount * rate).toFixed(2);
}

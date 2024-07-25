document.addEventListener('alpine:init', () => {
    Alpine.data('totalPhoneBillWidget', function() {
        return {
            phoneString: '',
            bill: '',
            totalPhoneBill() {
                let total = 0;
                const calls = this.phoneString.split(',').map(item => item.trim());
                calls.forEach(call => {
                    if (call === 'call') total += 2.75;
                    if (call === 'sms') total += 0.65;
                });
                this.bill = 'R' + total.toFixed(2);
            }
        }
    })
})

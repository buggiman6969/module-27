document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountString = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    const depositOutputElement = document.getElementById('deposit-output');
    const previousDepositOutputString = depositOutputElement.innerText;
    const previousDepositOutput = parseFloat(previousDepositOutputString);
    const totalDeposit = previousDepositOutput + newDepositAmount;
    depositOutputElement.innerText = totalDeposit;


    const oldTotalBalance = document.getElementById('total-balance');
    const oldTotalBalanceString = oldTotalBalance.innerText;
    const totalBalanceNum = parseFloat (oldTotalBalanceString);
    
    const newTotalBalance = totalBalanceNum + newDepositAmount;
    oldTotalBalance.innerText= newTotalBalance;

    depositInput.value ='';
})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawAmountString = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    const withdrawOutputElement = document.getElementById('withdraw-output');
    const previousWithdrawOutputString = withdrawOutputElement.innerText;
    const previousWithdrawOutput = parseFloat(previousWithdrawOutputString);
    withdrawOutputElement.innerText = previousWithdrawOutput + newWithdrawAmount;

    const oldTotalBalance = document.getElementById('total-balance');
    const oldTotalBalanceString = oldTotalBalance.innerText;
    const totalBalanceNum = parseFloat (oldTotalBalanceString);
    
    const newTotalBalance = totalBalanceNum - newWithdrawAmount;
    oldTotalBalance.innerText= newTotalBalance;

    withdrawInput.value = '';
})

const sequenceNumber = (number) => {

    let higherSequence = '';
    let currentSequence = '';

    number = number.toString().split('');

    number.forEach((num, index) => {

        if (index + 1 >= number.length) {
            return;
        }

        if ((num == number[index + 1] - 1) || (num == 9 && number[index + 1] == 0)) {

            if (index == 0 || currentSequence == '') {
                currentSequence += num;
            }

            currentSequence += number[index + 1];

            if (Number(currentSequence) > Number(higherSequence)) {
                higherSequence = currentSequence;
            }
        }
        else {
            currentSequence = ''
        }

    })

    return higherSequence;

}

export default sequenceNumber;
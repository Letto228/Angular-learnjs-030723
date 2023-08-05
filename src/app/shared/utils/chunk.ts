export default function (array: any[], chunkBy: number) {
    const arrayOfChunks = [];
    let tempArray = [];

    for (let i = 0; i < array.length; i++) {
        tempArray.push(array[i]);

        if (tempArray.length === chunkBy || i === array.length - 1) {
            arrayOfChunks.push(tempArray);
            tempArray = [];
        }
    }

    return arrayOfChunks;
}

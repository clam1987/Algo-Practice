function csvColumns(csv, indices) {
  const format_indices = [...new Set(indices)];
  let result = "";
  const csv_arr = csv.split("\n");
  csv_arr.forEach((el) => {
    const arr = el.split(",");
    format_indices
      .sort((a, b) => a - b)
      .forEach((i, index) => {
        if (arr[i] === undefined) {
          result += index === format_indices.length - 1 ? "\n" : "";
        } else {
          result += `${arr[i]}${
            index === format_indices.length - 1 ? "\n" : ","
          }`;
        }
      });
  });

  if (result.trim() === "") return "";
  result.replace(/,\n/g, "\n");

  return result.slice(0, -1).trim().replace(/,\n/g, "\n").replace(/,$/, "");
}

const csv1 = "1,2,3\n4,5,6";
const col1 = [0, 1]; // "1,2\n4,5"
const csv2 = "1,2\n3,4\n5,6";
const col2 = [5, 6, 7];
const csv3 = "a,b,c,d,e\n1,2,3,4,5\nf,g,h,i,j";
const col3 = [1, 3, 5, 7]; // "b,d\n2,4\ng,i"
const csv4 = "1\n2\n3\n4\n5";
const col4 = [0, 1]; // "1\n2\n3\n4\n5"
const csv5 = "1\n2\n3\n4\n5";
const col5 = [1]; // ""
const csv6 = "1,2,3,4,5,6,7,8,9";
const col6 = [0, 2, 4, 6, 8]; // "1,3,5,7,9"
const csv7 =
  "ag,H,f7P,5CQ,5,RjnY,nubYu,MPQgt,yym,v3IA,FdG2X,kbfy,Sx,wf0,a,lzqu";
const col7 = [1, 0, 9, 3, 6]; // "ag,H,5CQ\njnY,nubYu,yym\ndG2X,kbfy,wf0"
const csv8 =
  "ksBw,E,IjDh,9,YMF,jf,DLGn,AVV5,3pqMyDs,y,TNv,flo,MpQ,d,gGha,YyEKC,xybJ6y,Gs,b8JcX,yz,ZIk,oyZJo,7o,eHw3T,lokBt";
const col8 = [3, 0, 0, 3, 6, 3, 8, 6, 3];
// const res_1 = csvColumns(csv1, col1);
// console.log(res_1);
// const res_2 = csvColumns(csv2, col2);
// console.log(res_2);
// const res_3 = csvColumns(csv3, col3);
// console.log(res_3);
// const res_4 = csvColumns(csv4, col4);
// console.log(res_4);
// const res_5 = csvColumns(csv5, col5);
// console.log(res_5);
// const res_6 = csvColumns(csv6, col6);
// console.log(res_6);
// const res_7 = csvColumns(csv7, col7);
// console.log(res_7);
const res_8 = csvColumns(csv8, col8);
console.log(res_8);

// easier to read answer
// function csvColumns(csv, indices) {
//   return csv.split('\n')
//             .map(row => row.split(',').filter((_, i) => indices.includes(i)).join(','))
//             .join('\n')
//             .trim();
// }

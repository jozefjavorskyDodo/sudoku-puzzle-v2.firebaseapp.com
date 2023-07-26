import { Component } from "@angular/core";

@Component({
  selector: "app-html-body-main",
  templateUrl: "./html-body-main.component.html",
  styleUrls: ["./html-body-main.component.css"]
})

export class HtmlBodyMainComponent {

  subcubes_coloring_func(): void {

    let s00: any = document.querySelectorAll(String(".Sub00"));
    let s01: any = document.querySelectorAll(String(".Sub01"));
    let s02: any = document.querySelectorAll(String(".Sub02"));
    let s10: any = document.querySelectorAll(String(".Sub10"));
    let s11: any = document.querySelectorAll(String(".Sub11"));
    let s12: any = document.querySelectorAll(String(".Sub12"));
    let s20: any = document.querySelectorAll(String(".Sub20"));
    let s21: any = document.querySelectorAll(String(".Sub21"));
    let s22: any = document.querySelectorAll(String(".Sub22"));

    [...s00, ...s11, ...s22].forEach((cubicle) => {
      cubicle.style.borderColor = <string>"rgb(244, 122, 122)";
    });
    [...s01, ...s12, ...s20].forEach((cubicle) => {
      cubicle.style.borderColor = <string>"rgb(122, 244, 122)";
    });
    [...s02, ...s10, ...s21].forEach((cubicle) => {
      cubicle.style.borderColor = <string>"rgb(122, 122, 244)";
    });

  }

  rows_coloring_func(): void {

    let y0: any = document.querySelectorAll(String(".Y0"));
    let y1: any = document.querySelectorAll(String(".Y1"));
    let y2: any = document.querySelectorAll(String(".Y2"));
    let y3: any = document.querySelectorAll(String(".Y3"));
    let y4: any = document.querySelectorAll(String(".Y4"));
    let y5: any = document.querySelectorAll(String(".Y5"));
    let y6: any = document.querySelectorAll(String(".Y6"));
    let y7: any = document.querySelectorAll(String(".Y7"));
    let y8: any = document.querySelectorAll(String(".Y8"));

    [...y0, ...y3, ...y6].forEach((cubicle) => {
      cubicle.style.borderColor = <string>"rgb(244, 122, 122)";
    });
    [...y1, ...y4, ...y7].forEach((cubicle) => {
      cubicle.style.borderColor = <string>"rgb(122, 244, 122)";
    });
    [...y2, ...y5, ...y8].forEach((cubicle) => {
      cubicle.style.borderColor = <string>"rgb(122, 122, 244)";
    });

  }

  cols_coloring_func(): void {

    let x0: any = document.querySelectorAll(String(".X0"));
    let x1: any = document.querySelectorAll(String(".X1"));
    let x2: any = document.querySelectorAll(String(".X2"));
    let x3: any = document.querySelectorAll(String(".X3"));
    let x4: any = document.querySelectorAll(String(".X4"));
    let x5: any = document.querySelectorAll(String(".X5"));
    let x6: any = document.querySelectorAll(String(".X6"));
    let x7: any = document.querySelectorAll(String(".X7"));
    let x8: any = document.querySelectorAll(String(".X8"));

    [...x0, ...x3, ...x6].forEach((cubicle) => {
      cubicle.style.borderColor = <string>"rgb(244, 122, 122)";
    });
    [...x1, ...x4, ...x7].forEach((cubicle) => {
      cubicle.style.borderColor = <string>"rgb(122, 244, 122)";
    });
    [...x2, ...x5, ...x8].forEach((cubicle) => {
      cubicle.style.borderColor = <string>"rgb(122, 122, 244)";
    });

  }

  null_coloring_func(): void {

    let tds: any = document.querySelectorAll(String("td"));

    [...tds].forEach((cubicle) => { cubicle.style.borderColor = <string>"rgb(0, 0, 0)"; });

  }

  generate_unsolved_func(): void {

    let num_arr: number[] = [];
    let _tds: any = document.querySelectorAll(String("td"));
    let valid_output_flag: boolean = <boolean>true;
    let g_bttn: any = document.querySelector(String("#generate-bttn"));
    let s_bttn: any = document.querySelector(String("#solve-bttn"));

    g_bttn.style.visibility = <string>"hidden";
    [..._tds].forEach((cubicle) => {
      cubicle.innerHTML = String(Number(0));
      cubicle.style.color = <string>"rgb(0, 0, 0)";
    });
    while (Number(num_arr.length) < Number(9)) {

      let pos_new_val: number = Number(Math.floor(Math.random() * <number>9) + <number>1);

      if (Boolean(num_arr.includes(pos_new_val)) === <boolean>false) num_arr.push(pos_new_val);
    };
    for (let i: number = <number>0; i <= <number>8; i++) _tds[i].innerHTML = String(num_arr[i]);
    _tds[Number(12)].innerHTML = String(num_arr[Number(0)]);
    _tds[Number(13)].innerHTML = String(num_arr[Number(1)]);
    _tds[Number(14)].innerHTML = String(num_arr[Number(2)]);
    _tds[Number(24)].innerHTML = String(num_arr[Number(0)]);
    _tds[Number(25)].innerHTML = String(num_arr[Number(1)]);
    _tds[Number(26)].innerHTML = String(num_arr[Number(2)]);
    _tds[Number(15)].innerHTML = String(num_arr[Number(3)]);
    _tds[Number(16)].innerHTML = String(num_arr[Number(4)]);
    _tds[Number(17)].innerHTML = String(num_arr[Number(5)]);
    _tds[Number(18)].innerHTML = String(num_arr[Number(3)]);
    _tds[Number(19)].innerHTML = String(num_arr[Number(4)]);
    _tds[Number(20)].innerHTML = String(num_arr[Number(5)]);
    _tds[Number(9)].innerHTML = String(num_arr[Number(6)]);
    _tds[Number(10)].innerHTML = String(num_arr[Number(7)]);
    _tds[Number(11)].innerHTML = String(num_arr[Number(8)]);
    _tds[Number(21)].innerHTML = String(num_arr[Number(6)]);
    _tds[Number(22)].innerHTML = String(num_arr[Number(7)]);
    _tds[Number(23)].innerHTML = String(num_arr[Number(8)]);
    for (let r: number = <number>0; r < Number(19); r++) {
      for (let _i: number = <number>27; _i <= <number>80; _i++) {

        let td_class: string = String(_tds[_i].getAttribute(<string>"class"));
        let sub_: string = String(td_class).split(<string>' ')[<number>0];
        let y_: string = String(td_class).split(<string>' ')[<number>1];
        let x_: string = String(td_class).split(<string>' ')[<number>2];
        let sub__: any = document.querySelectorAll(String('.') + String(sub_));
        let y__: any = document.querySelectorAll(String('.') + String(y_));
        let x__: any = document.querySelectorAll(String('.') + String(x_));
        let sub___: number[] = [], y___: number[] = [], x___: number[] = [];

        for (let __i: number = <number>0; __i <= <number>8; __i++) {
          sub___.push(Number(sub__[__i].innerHTML));
          y___.push(Number(y__[__i].innerHTML));
          x___.push(Number(x__[__i].innerHTML));
        };
        for (let val__: number = <number>1; val__ <= <number>9; val__++) {
          if (
            Boolean(sub___.includes(val__)) === <boolean>false
            &&
            Boolean(y___.includes(val__)) === <boolean>false
            &&
            Boolean(x___.includes(val__)) === <boolean>false
          ) {
            _tds[_i].innerHTML = String(val__);
          };
        };
      };
    };
    [..._tds].forEach((cubicle) => {
      if (String(cubicle.innerHTML) === <string>'0') valid_output_flag = <boolean>false;
    });
    if (Boolean(valid_output_flag) === <boolean>false) { this.generate_unsolved_func(); } else {

      let indxs: number[] = [];

      while (Number(indxs.length) < Number(13)) {

        let prob_new_indx: number = Number(Math.floor(Math.random() * <number>81));

        if (Boolean(indxs.includes(prob_new_indx)) === <boolean>false) indxs.push(prob_new_indx);
      };
      [..._tds].forEach((cubicle) => { cubicle.style.color = <string>"rgb(0, 0, 0)"; });
      for (let item in indxs) _tds[Number(indxs[item])].style.color = <string>"rgb(122, 122, 122)";
      s_bttn.style.visibility = <string>"visible";
    };

  }

  solve_func(): void {

    let g_bttn: any = document.querySelector(String("#generate-bttn"));
    let s_bttn: any = document.querySelector(String("#solve-bttn"));
    let _tds: any = document.querySelectorAll(String("td"));

    g_bttn.style.visibility = <string>"visible";
    s_bttn.style.visibility = <string>"hidden";
    [..._tds].forEach((cubicle) => {
      if (String(cubicle.style.color) === <string>"rgb(122, 122, 122)") {
        cubicle.style.color = <string>"rgb(244, 244, 244)";
      };
    });

  }

}
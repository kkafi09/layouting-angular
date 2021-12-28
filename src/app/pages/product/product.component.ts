import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  closeResult = '';
  productForm: FormGroup;
  submitted = false;
  products: any;

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.products = [
      { name: 'Ayam goreng', category: 'Makanan', price: '20.000'},
      { name: 'Nasi goreng', category: 'Makanan', price: '20.000'},
      { name: 'Kopi', category: 'Minuman', price: '20.000'},
      { name: 'Es Jeruk', category: 'Minuman', price: '20.000'},
      { name: 'Teh', category: 'Minuman', price: '20.000'}
    ];

    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      category: ['', [Validators.required]],
      price: ['', [Validators.required]],
      hpp: ['', [Validators.required]],
    }, {});

  }

  public addItem(): void {
    if (this.submitted) {
      this.products.push(this.productForm.value);
    }
    this.productForm.reset();
  }

  get f() {
    return this.productForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    }
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

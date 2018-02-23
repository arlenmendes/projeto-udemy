import { Component, OnInit } from '@angular/core';
import {RadioOption} from '../shared/radio/radio-option.model';
import {OrdemCompraService} from './ordem-compra.service';
import {CarrinhoItem} from '../restaurante-detalhe/carrinho-compras/carrinho-item.model';
import {ItemOrdemCompra, OrdemCompra} from './ordem-compra.model';
import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'mt-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  formularioOrdemCompra: FormGroup;

  entrega = 8;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  numberPattern = /^[0-9]*$/;

  opcoesPagamento: RadioOption[] = [
    new RadioOption('Dinheiro', 'DIN'),
    new RadioOption('Cartão Débito', 'DEB'),
    new RadioOption('Cartão Crédito', 'CRED'),
    new RadioOption('Cartão Refeição', 'REF')
  ];

  constructor(
    private ordemCompraService: OrdemCompraService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.formularioOrdemCompra = this.formBuilder.group({
      // os dois aqui fazem a mesma coisa
      name: ['', [Validators.required, Validators.minLength(5)]],
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmacao: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      endereco: ['', [Validators.required, Validators.minLength(5)]],
      numero: ['', [Validators.required, Validators.pattern(this.numberPattern)]],
      complemento: '',
      opcaoPagamento: ['', [Validators.required]]
    }, {validator: OrdemCompraComponent.equalsTo});
  }

  static equalsTo(group: AbstractControl): {[key: string]: boolean} {
    const email = group.get('email');
    const emailConfirmacao = group.get('emailConfirmacao');
    if (!email || !emailConfirmacao) {
      return undefined;
    }
    return (email.value !== emailConfirmacao.value) ? {emailsNaoConbinam: true} : undefined;
  }

  itensCarrinho(): CarrinhoItem[] {
    return this.ordemCompraService.itensCarrinho();
  }

  aumentarQuantidade(item: CarrinhoItem) {
    this.ordemCompraService.aumentarQuantidade(item);
  }
  diminuirQuantidade(item: CarrinhoItem) {
    this.ordemCompraService.diminuirQuantidade(item);
  }
  removerItem(item: CarrinhoItem) {
    this.ordemCompraService.removerItem(item);
  }

  valorItens(): number {
    return this.ordemCompraService.valorItens();
  }

  verificarOrdemCompra(ordemCompra: OrdemCompra) {

    ordemCompra.itensOrdemCompra = this.itensCarrinho().map((item: CarrinhoItem) => new ItemOrdemCompra(item.quantidade, item.menuItem.id));

    this.ordemCompraService.verificarCompra(ordemCompra).subscribe((orderId: string) => {
      this.router.navigate(['/ordem-compra-resumo']);
      console.log(`Compra Concluída: ${orderId}`);
      this.ordemCompraService.limpar();
    });
    console.log(ordemCompra);
  }
}

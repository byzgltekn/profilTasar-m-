# Angular Yaşam Döngüsü Metotları

Angular componentleri oluşturulma, güncellenme ve yok edilme aşamalarından geçer. Bu sürece component lifecycle yani yaşam döngüsü denir.

Lifecycle metotları, componentin belirli aşamalarında kod çalıştırmamızı sağlar. Örneğin sayfa açıldığında API isteği atmak, input değiştiğinde işlem yapmak veya component kapanırken temizlik yapmak için kullanılır.

## Çalışma Sırası

```text
constructor
ngOnChanges
ngOnInit
ngDoCheck
ngAfterContentInit
ngAfterContentChecked
ngAfterViewInit
ngAfterViewChecked
afterNextRender
afterEveryRender
ngOnDestroy
```

## Lifecycle Metotları

| Metot | Ne Zaman Çalışır? | Kullanım Amacı |
| --- | --- | --- |
| `constructor` | Component instance'ı oluşturulduğunda | Dependency injection için kullanılır. |
| `ngOnChanges` | `@Input()` değeri değiştiğinde | Parent componentten gelen değişiklikleri yakalamak için kullanılır. |
| `ngOnInit` | Component ilk kez hazırlandığında | İlk veri çekme ve başlangıç işlemleri için kullanılır. |
| `ngDoCheck` | Angular değişiklik kontrolü yaptığında | Özel change detection işlemleri için kullanılır. |
| `ngAfterContentInit` | `ng-content` ile gelen içerik hazırlandığında | Projected content işlemleri için kullanılır. |
| `ngAfterContentChecked` | Projected content kontrol edildiğinde | İçerik kontrol sürecini izlemek için kullanılır. |
| `ngAfterViewInit` | Component view'i hazırlandığında | `ViewChild` gibi view elemanlarına erişmek için kullanılır. |
| `ngAfterViewChecked` | Component view'i kontrol edildiğinde | View kontrol sürecini izlemek için kullanılır. |
| `afterNextRender` | Bir sonraki render tamamlandığında | Tek seferlik DOM işlemleri için kullanılır. |
| `afterEveryRender` | Her render tamamlandığında | Her render sonrası hafif DOM işlemleri için kullanılır. |
| `ngOnDestroy` | Component yok edilmeden önce | Timer, subscription veya listener temizlemek için kullanılır. |

## Kısa Örnekler

### ngOnInit

Component açıldığında API'den veri çekmek için kullanılır.

```ts
ngOnInit(): void {
  this.userService.getUsers().subscribe((users) => {
    this.users = users;
  });
}
```

### ngOnChanges

Input değeri değiştiğinde çalışır.

```ts
@Input() userId!: number;

ngOnChanges(): void {
  console.log('User id changed:', this.userId);
}
```

### ngAfterViewInit

Template içindeki view elemanları hazırlandıktan sonra çalışır.

```ts
@ViewChild('title') title!: ElementRef;

ngAfterViewInit(): void {
  console.log(this.title.nativeElement.textContent);
}
```

### ngOnDestroy

Component kapatılırken temizlik yapmak için kullanılır.

```ts
private intervalId = setInterval(() => {
  console.log('running');
}, 1000);

ngOnDestroy(): void {
  clearInterval(this.intervalId);
}
```

## Önemli Notlar

- API çağrıları için genellikle `constructor` yerine `ngOnInit` kullanılır.
- `ngDoCheck`, `ngAfterContentChecked` ve `ngAfterViewChecked` sık çalışabilir. Bu yüzden ağır işlemler için uygun değildir.
- `ngOnDestroy`, memory leak oluşmasını engellemek için önemlidir.
- `afterNextRender` ve `afterEveryRender`, DOM render işlemleri tamamlandıktan sonra çalışır.

## Kaynak

Angular resmi dokümantasyonu: https://angular.dev/guide/components/lifecycle

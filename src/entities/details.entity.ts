import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Sales } from './sales.entity';

@Entity()
export class Details{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    product: string;
    
    @Column()
    quantity: number;

    @Column()
    unit_price: number;

    @ManyToOne(() => Sales, (sale) => sale.details)
    @JoinColumn({name:'id_sale'})
    id_sales: number;
}
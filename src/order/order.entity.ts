import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id!: number;

    @Column({ type: 'double precision'})
    public price!: number;

    /*
     * Relation IDs
     */

    @Column({ type: 'integer' })
    public productId!: number;

    @Column({ type: 'integer' })
    public userId!: number;
}

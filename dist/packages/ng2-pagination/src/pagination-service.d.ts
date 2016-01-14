/// <reference path="../../../../typings/angular2.d.ts" />
import { EventEmitter } from 'angular2/core';
export interface IPaginationInstance {
    /**
     * An optional ID for the pagination instance. Only useful if you wish to
     * have more than once instance at a time in a given component.
     */
    id?: string;
    /**
     * The number of items per paginated page.
     */
    itemsPerPage: number;
    /**
     * The current (active) page.
     */
    currentPage: number;
    /**
     * The total number of items in the collection. Only useful when
     * doing server-side paging, where the collection size is limited
     * to a single page returned by the server API.
     *
     * For in-memory paging, this property should not be set, as it
     * will be automatically set to the value of collection.length.
     */
    totalItems?: number;
}
export declare class PaginationService {
    change: EventEmitter<string>;
    private instances;
    defaultId: string;
    register(instance: IPaginationInstance): void;
    update(id: string, {itemsPerPage, totalItems}: {
        itemsPerPage: number;
        totalItems: number;
    }): void;
    /**
     * Returns the current page number.
     */
    getCurrentPage(id: string): number;
    getItemsPerPage(id: string): number;
    getTotalItems(id: string): number;
    /**
     * Sets the current page number.
     */
    setCurrentPage(id: string, page: number): boolean;
    /**
     * Sets the value of instance.totalItems
     */
    setTotalItems(id: string, totalItems: number): void;
    private _setTotalItems(id, totalItems);
    /**
     * Sets the value of instance.itemsPerPage.
     */
    setItemsPerPage(id: string, itemsPerPage: number): void;
    private _setItemsPerPage(id, itemsPerPage);
    /**
     * Returns a clone of the pagination instance object matching the id. If no
     * id specified, returns the instance corresponding to the default id.
     */
    getInstance(id?: string): IPaginationInstance;
    _checkPagination(id: string, method: string): void;
    _checkNumberArg(value: number, arg: string, method: string, allowUndef?: boolean): void;
}

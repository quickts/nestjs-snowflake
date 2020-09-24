import { Injectable } from "@nestjs/common";
import { SnowflakeService } from "../src";
@Injectable()
export class AppService {
    constructor(private readonly snowflakeService: SnowflakeService) {}

    async getHello() {
        return await this.snowflakeService.nextId();
    }
    //
}

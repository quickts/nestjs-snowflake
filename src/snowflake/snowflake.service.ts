import { Injectable, Inject } from "@nestjs/common";
import * as FlakeId from "flake-idgen";
import * as format from "biguint-format";
import { SNOWFLAKE_OPTION } from "./snowflake.constants";
import { SnowflakeOptions } from "./snowflake.interface";

@Injectable()
export class SnowflakeService {
    private readonly flakeId: FlakeId;
    constructor(@Inject(SNOWFLAKE_OPTION) options: SnowflakeOptions) {
        this.flakeId = new FlakeId(options);
    }

    nextIdSync(): string {
        return format(this.flakeId.next(), "dec");
    }

    nextId() {
        return new Promise<string>((resolve, reject) => {
            this.flakeId.next((err, id) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(format(id, "dec"));
                }
            });
        });
    }
}

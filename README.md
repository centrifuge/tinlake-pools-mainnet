# tinlake-pool-metadata
This repo stores pool metadata of active Tinlake pools on Kovan.

## Data Structure
Pool metadata is stored in this repo. Use the following folder structure:

```
metadata/ # pool config json files go here
   0x0231323[...].json # files should be named with the root
                        # address as the name if they are for a
                        # running pool
   upcoming_pool.json # Upcoming pools should not start with 0x
assets/ # other files such as logos go here
```
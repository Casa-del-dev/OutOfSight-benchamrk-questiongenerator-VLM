import type { TrajectoryData, VideoEntry } from "../Types";

const TRAJECTORY: Record<string, TrajectoryData> = {
  oos_staged_h5p0_0: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "4834a5a5778ef81c",
    object_a_name: "pen",
    query_time_sec: 89.0,
    query_time_in_clip_sec: 14.0,
    clip_start_time_sec: 75.0,
    clip_end_time_sec: 89.0,
    clip_duration_sec: 14.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "4834a5a5778ef81c",
      object_name: "pen",
      query_time_sec: 89.0,
      oos_span_start_sec: 84.0,
      oos_span_end_sec: 176.0,
      oos_duration_sec: 92.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.009",
      relocation_score: 0,
      clip_start_time_sec: 75.0,
      clip_end_time_sec: 89.0,
      clip_duration_sec: 14.0,
      anchor_assoc_id: "d88474d879d24082",
      anchor_name: "stock cube",
      anchor_projected_pixel: [820.812086878443, 904.5736068236472],
      anchor_world_coordinates: [
        -0.12303030437640194, -2.283897273339636, -0.42863723703185447,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_0",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:01:29.0 video 1>, is the previously moved pen visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.18838602707305263, 1.037852597493115, -0.6573420771348925,
          ],
          frame_index: 2503,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved pen last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 77.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:01:17.0 video 1>",
          projected_pixel: [694.4907800854245, 1045.5947819352498],
          normalized_projected_pixel: [0.49324629267430714, 0.7426099303517399],
          camera_coordinates: [
            -0.004990294010057905, 0.28800340190666784, 0.5131195386718326,
          ],
          frame_index: 2316,
          status: "in_view",
          fixture: "P01_counter.008",
          world_coordinates: [
            -1.5788483507864282, -2.2543328822588995, -0.5793134099439712,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved pen stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 83.43333333333334,
          last_placement_time_in_clip_sec: 8.433333333333337,
          last_placement_time_token: "<TIME 00:01:23.4 video 1>",
          projected_pixel: [980.0791322432808, 1155.3748954852601],
          normalized_projected_pixel: [0.6960789291500574, 0.820578760998054],
          camera_coordinates: [
            0.21431793397450116, 0.3418479305437464, 0.428872909662251,
          ],
          frame_index: 2503,
          status: "last_past_track_end",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:01:29.0 video 1>, based on the last known position of the pen that was moved earlier,which fixture is closest to it?",
        choices: ["cupboard", "drawer", "fridgefreezer", "counter", "bin"],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 77.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.008",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:01:29.0 video 1>, the pen that was moved earlier is not visible. Based on its last known position, in which direction is the pen from your viewpoint?",
          choices: ["Front-right", "Back-left", "Front-left", "Back-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 89.0,
            camera_coordinates: [
              -0.18838602707305263, 1.037852597493115, -0.6573420771348925,
            ],
            world_coordinates: [
              -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.18838602707305263,
              z: -0.6573420771348925,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:01:29.0 video 1>, the pen that was moved earlier is not visible. Based on the last known position of the pen and the position of the marked stock cube in the current frame, where is the pen relative to stock cube from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "4834a5a5778ef81c",
            object_x_name: "pen",
            object_x_reference_time_sec: 89.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
            ],
            object_x_camera_coordinates: [
              -0.18838602707305263, 1.037852597493115, -0.6573420771348925,
            ],
            object_y_assoc_id: "d88474d879d24082",
            object_y_name: "stock cube",
            object_y_reference_time_sec: 89.0,
            object_y_world_coordinates: [
              -0.12303030437640194, -2.283897273339636, -0.42863723703185447,
            ],
            object_y_projected_pixel: [820.812086878443, 904.5736068236472],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.5829631298852578, 0.6424528457554313,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:01:29.0 video 1>, the pen that was moved earlier is not visible. Based on the last known position of the pen, and the position of the marked stock cube in the current frame, how far is the pen from thestock cube?",
          choices: ["close", "medium", "far", "very close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "4834a5a5778ef81c",
            object_x_name: "pen",
            object_x_reference_time_sec: 89.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "d88474d879d24082",
            object_y_name: "stock cube",
            object_y_pixel: [820.812086878443, 904.5736068236472],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.28541626351144567, 0.880737734093193, -1.1467698029888993,
            ],
            distance_m: 1.4738529033725332,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.5829631298852578, 0.6424528457554313,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_1: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "f9f5c658de80a76c",
    object_a_name: "empty mug",
    query_time_sec: 152.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 144.0,
    clip_end_time_sec: 152.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "f9f5c658de80a76c",
      object_name: "empty mug",
      query_time_sec: 152.0,
      oos_span_start_sec: 147.0,
      oos_span_end_sec: 167.0,
      oos_duration_sec: 20.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 2,
      clip_start_time_sec: 144.0,
      clip_end_time_sec: 152.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "d88474d879d24082",
      anchor_name: "stock cube",
      anchor_projected_pixel: [860.2436277557388, 918.1496551802431],
      anchor_world_coordinates: [
        -0.12303030437640194, -2.283897273339636, -0.42863723703185447,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_1",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:32.0 video 1>, is the previously moved empty mug visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.1162972143159284, 1.1952236429949474, -0.6187478560964687,
          ],
          frame_index: 4152,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved empty mug last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 146.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:02:26.0 video 1>",
          projected_pixel: [700.3218943245719, 1102.2576443404073],
          normalized_projected_pixel: [0.497387709037338, 0.7828534405826756],
          camera_coordinates: [
            -6.176326586615488e-5, 0.35066128259083373, 0.5267690033434973,
          ],
          frame_index: 4152,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved empty mug stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 138.4,
          last_placement_time_in_clip_sec: -5.599999999999994,
          last_placement_time_token: "<TIME 00:02:18.4 video 1>",
          projected_pixel: [930.990367957302, 1045.6902180318134],
          normalized_projected_pixel: [0.6612147499696748, 0.742677711670322],
          camera_coordinates: [
            0.2162334101514618, 0.3153457453056905, 0.5503926968016559,
          ],
          frame_index: 4152,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:02:32.0 video 1>, based on the last known position of the empty mug that was moved earlier,which fixture is closest to it?",
        choices: ["bin", "hob", "drawer", "counter", "cupboard"],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 146.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.007",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:02:32.0 video 1>, the empty mug that was moved earlier is not visible. Based on its last known position, in which direction is the empty mug from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 152.0,
            camera_coordinates: [
              1.1162972143159284, 1.1952236429949474, -0.6187478560964687,
            ],
            world_coordinates: [
              -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.1162972143159284,
              z: -0.6187478560964687,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:02:32.0 video 1>, the empty mug that was moved earlier is not visible. Based on the last known position of the empty mug and the position of the marked stock cube in the current frame, where is the empty mug relative to stock cube from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "f9f5c658de80a76c",
            object_x_name: "empty mug",
            object_x_reference_time_sec: 152.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
            ],
            object_x_camera_coordinates: [
              1.1162972143159284, 1.1952236429949474, -0.6187478560964687,
            ],
            object_y_assoc_id: "d88474d879d24082",
            object_y_name: "stock cube",
            object_y_reference_time_sec: 152.0,
            object_y_world_coordinates: [
              -0.12303030437640194, -2.283897273339636, -0.42863723703185447,
            ],
            object_y_projected_pixel: [860.2436277557388, 918.1496551802431],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.6109684856219736, 0.6520949255541499,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:02:32.0 video 1>, the empty mug that was moved earlier is not visible. Based on the last known position of the empty mug, and the position of the marked stock cube in the current frame, how far is the empty mug from thestock cube?",
          choices: ["medium", "far", "close", "very close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "f9f5c658de80a76c",
            object_x_name: "empty mug",
            object_x_reference_time_sec: 152.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "d88474d879d24082",
            object_y_name: "stock cube",
            object_y_pixel: [860.2436277557388, 918.1496551802431],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.9860187457652017, 1.0251789727888418, -1.1123905858534104,
            ],
            distance_m: 1.8057235969948613,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.6109684856219736, 0.6520949255541499,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_2: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "3ca360d7506fd255",
    object_a_name: "carrot piece",
    query_time_sec: 152.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 144.0,
    clip_end_time_sec: 152.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "3ca360d7506fd255",
      object_name: "carrot piece",
      query_time_sec: 152.0,
      oos_span_start_sec: 147.0,
      oos_span_end_sec: 167.0,
      oos_duration_sec: 20.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 144.0,
      clip_end_time_sec: 152.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "d88474d879d24082",
      anchor_name: "stock cube",
      anchor_projected_pixel: [860.2436277557388, 918.1496551802431],
      anchor_world_coordinates: [
        -0.12303030437640194, -2.283897273339636, -0.42863723703185447,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_2",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:32.0 video 1>, is the previously moved carrot piece visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.9646452372194547, 0.933240349665117, -0.7738941578460833,
          ],
          frame_index: 4370,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved carrot piece last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 146.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:02:26.0 video 1>",
          projected_pixel: [950.6393164817277, 1062.5537299355158],
          normalized_projected_pixel: [0.6751699690921362, 0.7546546377382924],
          camera_coordinates: [
            0.11516866643284662, 0.16254017102146223, 0.26785523673162004,
          ],
          frame_index: 4370,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved carrot piece stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 145.66666666666666,
          last_placement_time_in_clip_sec: 1.6666666666666572,
          last_placement_time_token: "<TIME 00:02:25.7 video 1>",
          projected_pixel: [923.8953100923059, 1056.0664264266118],
          normalized_projected_pixel: [0.6561756463723764, 0.7500471778598095],
          camera_coordinates: [
            0.10389449390734984, 0.1611518170809152, 0.27244176725214286,
          ],
          frame_index: 4370,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:02:32.0 video 1>, based on the last known position of the carrot piece that was moved earlier,which fixture is closest to it?",
        choices: ["sink", "drawer", "hob", "shelf", "counter"],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 146.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.007",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:02:32.0 video 1>, the carrot piece that was moved earlier is not visible. Based on its last known position, in which direction is the carrot piece from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 152.0,
            camera_coordinates: [
              0.9646452372194547, 0.933240349665117, -0.7738941578460833,
            ],
            world_coordinates: [
              -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.9646452372194547,
              z: -0.7738941578460833,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:02:32.0 video 1>, the carrot piece that was moved earlier is not visible. Based on the last known position of the carrot piece and the position of the marked stock cube in the current frame, where is the carrot piece relative to stock cube from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "3ca360d7506fd255",
            object_x_name: "carrot piece",
            object_x_reference_time_sec: 152.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
            ],
            object_x_camera_coordinates: [
              0.9646452372194547, 0.933240349665117, -0.7738941578460833,
            ],
            object_y_assoc_id: "d88474d879d24082",
            object_y_name: "stock cube",
            object_y_reference_time_sec: 152.0,
            object_y_world_coordinates: [
              -0.12303030437640194, -2.283897273339636, -0.42863723703185447,
            ],
            object_y_projected_pixel: [860.2436277557388, 918.1496551802431],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.6109684856219736, 0.6520949255541499,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:02:32.0 video 1>, the carrot piece that was moved earlier is not visible. Based on the last known position of the carrot piece, and the position of the marked stock cube in the current frame, how far is the carrot piece from thestock cube?",
          choices: ["far", "medium", "close", "very close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "3ca360d7506fd255",
            object_x_name: "carrot piece",
            object_x_reference_time_sec: 152.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "d88474d879d24082",
            object_y_name: "stock cube",
            object_y_pixel: [860.2436277557388, 918.1496551802431],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.8343667686687279, 0.7631956794590113, -1.267536887603025,
            ],
            distance_m: 1.6986127608251271,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.6109684856219736, 0.6520949255541499,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_3: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "d5b1a639aef5b172",
    object_a_name: "box of stock cubes",
    query_time_sec: 154.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 146.0,
    clip_end_time_sec: 154.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "d5b1a639aef5b172",
      object_name: "box of stock cubes",
      query_time_sec: 154.0,
      oos_span_start_sec: 149.0,
      oos_span_end_sec: 161.0,
      oos_duration_sec: 12.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 2,
      clip_start_time_sec: 146.0,
      clip_end_time_sec: 154.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "d88474d879d24082",
      anchor_name: "stock cube",
      anchor_projected_pixel: [868.3542865567226, 933.2168666910782],
      anchor_world_coordinates: [
        -0.12303030437640194, -2.283897273339636, -0.42863723703185447,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_3",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:34.0 video 1>, is the previously moved box of stock cubes visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-89.04018982603372, 1111.148795203402],
          camera_coordinates: [
            -0.6495199568916787, 0.328923312827349, 0.29007079220687665,
          ],
          frame_index: 2034,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved box of stock cubes last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 148.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:02:28.0 video 1>",
          projected_pixel: [186.80752594639307, 1001.9261256963684],
          normalized_projected_pixel: [0.132675799677836, 0.7115952597275345],
          camera_coordinates: [
            -0.6323993465613196, 0.3595563638234749, 0.6642059439463821,
          ],
          frame_index: 2034,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.5027108512379408, -1.561959642955106, -0.5574559334251779,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved box of stock cubes stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 67.8,
          last_placement_time_in_clip_sec: -78.2,
          last_placement_time_token: "<TIME 00:01:07.8 video 1>",
          projected_pixel: [532.5599086211942, 1098.1872026300302],
          normalized_projected_pixel: [0.3782385714639163, 0.7799625018679192],
          camera_coordinates: [
            -0.14434296929995005, 0.33425055506388013, 0.5026784073153631,
          ],
          frame_index: 2034,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.5027108512379408, -1.561959642955106, -0.5574559334251779,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:02:34.0 video 1>, based on the last known position of the box of stock cubes that was moved earlier,which fixture is closest to it?",
        choices: ["shelf", "counter", "sink", "dishwasher", "hob"],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 148.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.001",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:02:34.0 video 1>, the box of stock cubes that was moved earlier is not visible. Based on its last known position, in which direction is the box of stock cubes from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 154.0,
            camera_coordinates: [
              -0.6495199568916787, 0.328923312827349, 0.29007079220687665,
            ],
            world_coordinates: [
              -0.5027108512379408, -1.561959642955106, -0.5574559334251779,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.6495199568916787,
              z: 0.29007079220687665,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:02:34.0 video 1>, the box of stock cubes that was moved earlier is not visible. Based on the last known position of the box of stock cubes and the position of the marked stock cube in the current frame, where is the box of stock cubes relative to stock cube from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "d5b1a639aef5b172",
            object_x_name: "box of stock cubes",
            object_x_reference_time_sec: 154.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.5027108512379408, -1.561959642955106, -0.5574559334251779,
            ],
            object_x_camera_coordinates: [
              -0.6495199568916787, 0.328923312827349, 0.29007079220687665,
            ],
            object_y_assoc_id: "d88474d879d24082",
            object_y_name: "stock cube",
            object_y_reference_time_sec: 154.0,
            object_y_world_coordinates: [
              -0.12303030437640194, -2.283897273339636, -0.42863723703185447,
            ],
            object_y_projected_pixel: [868.3542865567226, 933.2168666910782],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.6167288967022178, 0.6627960700930953,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:02:34.0 video 1>, the box of stock cubes that was moved earlier is not visible. Based on the last known position of the box of stock cubes, and the position of the marked stock cube in the current frame, how far is the box of stock cubes from thestock cube?",
          choices: ["very close", "medium", "far", "close"],
          correct_idx: 3,
          answer_metadata: {
            object_x_assoc_id: "d5b1a639aef5b172",
            object_x_name: "box of stock cubes",
            object_x_reference_time_sec: 154.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "d88474d879d24082",
            object_y_name: "stock cube",
            object_y_pixel: [868.3542865567226, 933.2168666910782],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.7867846381638433, 0.1460915539838723, -0.2038938630139452,
            ],
            distance_m: 0.8257999251457837,
            distance_bucket: "close",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.6167288967022178, 0.6627960700930953,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_4: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "f9f5c658de80a76c",
    object_a_name: "empty mug",
    query_time_sec: 197.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 189.0,
    clip_end_time_sec: 197.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "f9f5c658de80a76c",
      object_name: "empty mug",
      query_time_sec: 197.0,
      oos_span_start_sec: 192.0,
      oos_span_end_sec: 203.0,
      oos_duration_sec: 11.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 2,
      clip_start_time_sec: 189.0,
      clip_end_time_sec: 197.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "011b4b830a9ed325",
      anchor_name: "lid2",
      anchor_projected_pixel: [756.0803126799839, 781.48371437533],
      anchor_world_coordinates: [
        -0.12528748455059374, -2.2531596031558596, -0.4512985527361294,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_4",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:03:17.0 video 1>, is the previously moved empty mug visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.4771711287082914, 0.8289045363411958, -0.2802239702547993,
          ],
          frame_index: 4152,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved empty mug last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 191.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:03:11.0 video 1>",
          projected_pixel: [767.7604316735907, 289.6344766131932],
          normalized_projected_pixel: [0.5452843974954479, 0.20570630441277926],
          camera_coordinates: [
            0.10711177409186035, -0.6679390848832529, 0.9280829178703076,
          ],
          frame_index: 4152,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved empty mug stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 138.4,
          last_placement_time_in_clip_sec: -50.599999999999994,
          last_placement_time_token: "<TIME 00:02:18.4 video 1>",
          projected_pixel: [930.990367957302, 1045.6902180318134],
          normalized_projected_pixel: [0.6612147499696748, 0.742677711670322],
          camera_coordinates: [
            0.2162334101514618, 0.3153457453056905, 0.5503926968016559,
          ],
          frame_index: 4152,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:03:17.0 video 1>, based on the last known position of the empty mug that was moved earlier,which fixture is closest to it?",
        choices: ["counter", "fridgefreezer", "drawer", "dishwasher", "hob"],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 191.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.007",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:03:17.0 video 1>, the empty mug that was moved earlier is not visible. Based on its last known position, in which direction is the empty mug from your viewpoint?",
          choices: ["Back-left", "Front-left", "Front-right", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 197.0,
            camera_coordinates: [
              1.4771711287082914, 0.8289045363411958, -0.2802239702547993,
            ],
            world_coordinates: [
              -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.4771711287082914,
              z: -0.2802239702547993,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:03:17.0 video 1>, the empty mug that was moved earlier is not visible. Based on the last known position of the empty mug and the position of the marked lid2 in the current frame, where is the empty mug relative to lid2 from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "f9f5c658de80a76c",
            object_x_name: "empty mug",
            object_x_reference_time_sec: 197.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
            ],
            object_x_camera_coordinates: [
              1.4771711287082914, 0.8289045363411958, -0.2802239702547993,
            ],
            object_y_assoc_id: "011b4b830a9ed325",
            object_y_name: "lid2",
            object_y_reference_time_sec: 197.0,
            object_y_world_coordinates: [
              -0.12528748455059374, -2.2531596031558596, -0.4512985527361294,
            ],
            object_y_projected_pixel: [756.0803126799839, 781.48371437533],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.5369888584374886, 0.5550310471415696,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:03:17.0 video 1>, the empty mug that was moved earlier is not visible. Based on the last known position of the empty mug, and the position of the marked lid2 in the current frame, how far is the empty mug from thelid2?",
          choices: ["very close", "far", "medium", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "f9f5c658de80a76c",
            object_x_name: "empty mug",
            object_x_reference_time_sec: 197.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "011b4b830a9ed325",
            object_y_name: "lid2",
            object_y_pixel: [756.0803126799839, 781.48371437533],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.425358138114953, 0.7620107498962116, -0.8448274925505744,
            ],
            distance_m: 1.8237433199376505,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.5369888584374886, 0.5550310471415696,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_5: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "3ca360d7506fd255",
    object_a_name: "carrot piece",
    query_time_sec: 197.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 189.0,
    clip_end_time_sec: 197.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "3ca360d7506fd255",
      object_name: "carrot piece",
      query_time_sec: 197.0,
      oos_span_start_sec: 192.0,
      oos_span_end_sec: 203.0,
      oos_duration_sec: 11.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 189.0,
      clip_end_time_sec: 197.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "011b4b830a9ed325",
      anchor_name: "lid2",
      anchor_projected_pixel: [756.0803126799839, 781.48371437533],
      anchor_world_coordinates: [
        -0.12528748455059374, -2.2531596031558596, -0.4512985527361294,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_5",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:03:17.0 video 1>, is the previously moved carrot piece visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.2854495581371541, 0.6376322747391, -0.4860435621481649,
          ],
          frame_index: 4370,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved carrot piece last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 191.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:03:11.0 video 1>",
          projected_pixel: [921.8786476012515, 155.5319209984068],
          normalized_projected_pixel: [0.6547433576713434, 0.11046301207273211],
          camera_coordinates: [
            0.25768862227967704, -0.6458203959297983, 0.6238768701385125,
          ],
          frame_index: 4370,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved carrot piece stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 145.66666666666666,
          last_placement_time_in_clip_sec: -43.33333333333334,
          last_placement_time_token: "<TIME 00:02:25.7 video 1>",
          projected_pixel: [923.8953100923059, 1056.0664264266118],
          normalized_projected_pixel: [0.6561756463723764, 0.7500471778598095],
          camera_coordinates: [
            0.10389449390734984, 0.1611518170809152, 0.27244176725214286,
          ],
          frame_index: 4370,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:03:17.0 video 1>, based on the last known position of the carrot piece that was moved earlier,which fixture is closest to it?",
        choices: ["hob", "counter", "cupboard", "dishwasher", "bin"],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 191.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.007",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:03:17.0 video 1>, the carrot piece that was moved earlier is not visible. Based on its last known position, in which direction is the carrot piece from your viewpoint?",
          choices: ["Front-left", "Back-left", "Front-right", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 197.0,
            camera_coordinates: [
              1.2854495581371541, 0.6376322747391, -0.4860435621481649,
            ],
            world_coordinates: [
              -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.2854495581371541,
              z: -0.4860435621481649,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:03:17.0 video 1>, the carrot piece that was moved earlier is not visible. Based on the last known position of the carrot piece and the position of the marked lid2 in the current frame, where is the carrot piece relative to lid2 from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "3ca360d7506fd255",
            object_x_name: "carrot piece",
            object_x_reference_time_sec: 197.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
            ],
            object_x_camera_coordinates: [
              1.2854495581371541, 0.6376322747391, -0.4860435621481649,
            ],
            object_y_assoc_id: "011b4b830a9ed325",
            object_y_name: "lid2",
            object_y_reference_time_sec: 197.0,
            object_y_world_coordinates: [
              -0.12528748455059374, -2.2531596031558596, -0.4512985527361294,
            ],
            object_y_projected_pixel: [756.0803126799839, 781.48371437533],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.5369888584374886, 0.5550310471415696,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:03:17.0 video 1>, the carrot piece that was moved earlier is not visible. Based on the last known position of the carrot piece, and the position of the marked lid2 in the current frame, how far is the carrot piece from thelid2?",
          choices: ["close", "very close", "far", "medium"],
          correct_idx: 3,
          answer_metadata: {
            object_x_assoc_id: "3ca360d7506fd255",
            object_x_name: "carrot piece",
            object_x_reference_time_sec: 197.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "011b4b830a9ed325",
            object_y_name: "lid2",
            object_y_pixel: [756.0803126799839, 781.48371437533],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.2336365675438157, 0.5707384882941159, -1.05064708444394,
            ],
            distance_m: 1.7179816351905777,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.5369888584374886, 0.5550310471415696,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_6: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "039f7e7efd96f484",
    object_a_name: "spatula",
    query_time_sec: 209.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 201.0,
    clip_end_time_sec: 209.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "039f7e7efd96f484",
      object_name: "spatula",
      query_time_sec: 209.0,
      oos_span_start_sec: 204.0,
      oos_span_end_sec: 224.0,
      oos_duration_sec: 20.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 201.0,
      clip_end_time_sec: 209.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "f9f5c658de80a76c",
      anchor_name: "empty mug",
      anchor_projected_pixel: [351.41645477130265, 745.8740140521832],
      anchor_world_coordinates: [
        -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_6",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:03:29.0 video 1>, is the previously moved spatula visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.7173110221836361, 0.7175198891735781, -0.15512754918146765,
          ],
          frame_index: 5005,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved spatula last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 203.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:03:23.0 video 1>",
          projected_pixel: [894.4949947751072, 823.4555415449477],
          normalized_projected_pixel: [0.6352947406073205, 0.5848405834836276],
          camera_coordinates: [
            0.1991633884874635, 0.11703570734983859, 0.6236044680095153,
          ],
          frame_index: 5005,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3996929235133511, -2.6314488801133136, -0.5524938701650501,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved spatula stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 166.83333333333334,
          last_placement_time_in_clip_sec: -34.16666666666666,
          last_placement_time_token: "<TIME 00:02:46.8 video 1>",
          projected_pixel: [1163.0361082101085, 1138.1635864796554],
          normalized_projected_pixel: [0.8260199632174067, 0.808354819942937],
          camera_coordinates: [
            0.36305404673523833, 0.33642767237080734, 0.40914144326217494,
          ],
          frame_index: 5005,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3996929235133511, -2.6314488801133136, -0.5524938701650501,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:03:29.0 video 1>, based on the last known position of the spatula that was moved earlier,which fixture is closest to it?",
        choices: ["bin", "shelf", "counter", "hob", "fridgefreezer"],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 203.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.002",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:03:29.0 video 1>, the spatula that was moved earlier is not visible. Based on its last known position, in which direction is the spatula from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 209.0,
            camera_coordinates: [
              -0.7173110221836361, 0.7175198891735781, -0.15512754918146765,
            ],
            world_coordinates: [
              -0.3996929235133511, -2.6314488801133136, -0.5524938701650501,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.7173110221836361,
              z: -0.15512754918146765,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:03:29.0 video 1>, the spatula that was moved earlier is not visible. Based on the last known position of the spatula and the position of the marked empty mug in the current frame, where is the spatula relative to empty mug from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "039f7e7efd96f484",
            object_x_name: "spatula",
            object_x_reference_time_sec: 209.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3996929235133511, -2.6314488801133136, -0.5524938701650501,
            ],
            object_x_camera_coordinates: [
              -0.7173110221836361, 0.7175198891735781, -0.15512754918146765,
            ],
            object_y_assoc_id: "f9f5c658de80a76c",
            object_y_name: "empty mug",
            object_y_reference_time_sec: 209.0,
            object_y_world_coordinates: [
              -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
            ],
            object_y_projected_pixel: [351.41645477130265, 745.8740140521832],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.24958555026370927, 0.5297400667984256,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:03:29.0 video 1>, the spatula that was moved earlier is not visible. Based on the last known position of the spatula, and the position of the marked empty mug in the current frame, how far is the spatula from theempty mug?",
          choices: ["far", "very close", "medium", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "039f7e7efd96f484",
            object_x_name: "spatula",
            object_x_reference_time_sec: 209.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "f9f5c658de80a76c",
            object_y_name: "empty mug",
            object_y_pixel: [351.41645477130265, 745.8740140521832],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.11241660973980805, 0.6542298656168877, -1.1909327262367357,
            ],
            distance_m: 1.363442323544398,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.24958555026370927, 0.5297400667984256,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_7: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "4834a5a5778ef81c",
    object_a_name: "pen",
    query_time_sec: 222.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 214.0,
    clip_end_time_sec: 222.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "4834a5a5778ef81c",
      object_name: "pen",
      query_time_sec: 222.0,
      oos_span_start_sec: 217.0,
      oos_span_end_sec: 235.0,
      oos_duration_sec: 18.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.009",
      relocation_score: 0,
      clip_start_time_sec: 214.0,
      clip_end_time_sec: 222.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "f9f5c658de80a76c",
      anchor_name: "empty mug",
      anchor_projected_pixel: [980.1396759614086, 747.397221821486],
      anchor_world_coordinates: [
        -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_7",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:03:42.0 video 1>, is the previously moved pen visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.6299750438837757, 0.5292168671434841, -0.43669079889362905,
          ],
          frame_index: 2503,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved pen last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 216.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:03:36.0 video 1>",
          projected_pixel: [1328.3641126145312, 950.148128679781],
          normalized_projected_pixel: [0.9434404208910023, 0.6748211141191627],
          camera_coordinates: [
            0.8282625275874886, 0.3170554604220497, 0.6548000243008973,
          ],
          frame_index: 2503,
          status: "in_view",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved pen stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 83.43333333333334,
          last_placement_time_in_clip_sec: -130.56666666666666,
          last_placement_time_token: "<TIME 00:01:23.4 video 1>",
          projected_pixel: [980.0791322432808, 1155.3748954852601],
          normalized_projected_pixel: [0.6960789291500574, 0.820578760998054],
          camera_coordinates: [
            0.21431793397450116, 0.3418479305437464, 0.428872909662251,
          ],
          frame_index: 2503,
          status: "last_past_track_end",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:03:42.0 video 1>, based on the last known position of the pen that was moved earlier,which fixture is closest to it?",
        choices: ["dishwasher", "oven", "drawer", "counter", "shelf"],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 216.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.009",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:03:42.0 video 1>, the pen that was moved earlier is not visible. Based on its last known position, in which direction is the pen from your viewpoint?",
          choices: ["Front-right", "Back-left", "Front-left", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 222.0,
            camera_coordinates: [
              0.6299750438837757, 0.5292168671434841, -0.43669079889362905,
            ],
            world_coordinates: [
              -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.6299750438837757,
              z: -0.43669079889362905,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:03:42.0 video 1>, the pen that was moved earlier is not visible. Based on the last known position of the pen and the position of the marked empty mug in the current frame, where is the pen relative to empty mug from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "4834a5a5778ef81c",
            object_x_name: "pen",
            object_x_reference_time_sec: 222.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
            ],
            object_x_camera_coordinates: [
              0.6299750438837757, 0.5292168671434841, -0.43669079889362905,
            ],
            object_y_assoc_id: "f9f5c658de80a76c",
            object_y_name: "empty mug",
            object_y_reference_time_sec: 222.0,
            object_y_world_coordinates: [
              -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
            ],
            object_y_projected_pixel: [980.1396759614086, 747.397221821486],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.696121928949864, 0.5308218904982145,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:03:42.0 video 1>, the pen that was moved earlier is not visible. Based on the last known position of the pen, and the position of the marked empty mug in the current frame, how far is the pen from theempty mug?",
          choices: ["far", "very close", "close", "medium"],
          correct_idx: 3,
          answer_metadata: {
            object_x_assoc_id: "4834a5a5778ef81c",
            object_x_name: "pen",
            object_x_reference_time_sec: 222.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "f9f5c658de80a76c",
            object_y_name: "empty mug",
            object_y_pixel: [980.1396759614086, 747.397221821486],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.22058859048230883, 0.47351314237425857, -1.3207466023448675,
            ],
            distance_m: 1.4202977187398522,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.696121928949864, 0.5308218904982145,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_8: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "f9f5c658de80a76c",
    object_a_name: "empty mug",
    query_time_sec: 228.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 220.0,
    clip_end_time_sec: 228.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "f9f5c658de80a76c",
      object_name: "empty mug",
      query_time_sec: 228.0,
      oos_span_start_sec: 223.0,
      oos_span_end_sec: 234.0,
      oos_duration_sec: 11.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 2,
      clip_start_time_sec: 220.0,
      clip_end_time_sec: 228.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "d5b1a639aef5b172",
      anchor_name: "box of stock cubes",
      anchor_projected_pixel: [765.7097178498701, 791.4649075602192],
      anchor_world_coordinates: [
        -0.5027108512379408, -1.561959642955106, -0.5574559334251779,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_8",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:03:48.0 video 1>, is the previously moved empty mug visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.6825737923101134, 1.108521926796882, -0.5268670786360388,
          ],
          frame_index: 4152,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved empty mug last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 222.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:03:42.0 video 1>",
          projected_pixel: [980.1396759614086, 747.397221821486],
          normalized_projected_pixel: [0.696121928949864, 0.5308218904982145],
          camera_coordinates: [
            0.40938645340146684, 0.05570372476922558, 0.8840558034512385,
          ],
          frame_index: 4152,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved empty mug stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 138.4,
          last_placement_time_in_clip_sec: -81.6,
          last_placement_time_token: "<TIME 00:02:18.4 video 1>",
          projected_pixel: [930.990367957302, 1045.6902180318134],
          normalized_projected_pixel: [0.6612147499696748, 0.742677711670322],
          camera_coordinates: [
            0.2162334101514618, 0.3153457453056905, 0.5503926968016559,
          ],
          frame_index: 4152,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:03:48.0 video 1>, based on the last known position of the empty mug that was moved earlier,which fixture is closest to it?",
        choices: ["drawer", "hob", "cupboard", "counter", "shelf"],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 222.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.007",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:03:48.0 video 1>, the empty mug that was moved earlier is not visible. Based on its last known position, in which direction is the empty mug from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 228.0,
            camera_coordinates: [
              1.6825737923101134, 1.108521926796882, -0.5268670786360388,
            ],
            world_coordinates: [
              -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.6825737923101134,
              z: -0.5268670786360388,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:03:48.0 video 1>, the empty mug that was moved earlier is not visible. Based on the last known position of the empty mug and the position of the marked box of stock cubes in the current frame, where is the empty mug relative to box of stock cubes from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "f9f5c658de80a76c",
            object_x_name: "empty mug",
            object_x_reference_time_sec: 228.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
            ],
            object_x_camera_coordinates: [
              1.6825737923101134, 1.108521926796882, -0.5268670786360388,
            ],
            object_y_assoc_id: "d5b1a639aef5b172",
            object_y_name: "box of stock cubes",
            object_y_reference_time_sec: 228.0,
            object_y_world_coordinates: [
              -0.5027108512379408, -1.561959642955106, -0.5574559334251779,
            ],
            object_y_projected_pixel: [765.7097178498701, 791.4649075602192],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.5438279246092828, 0.5621199627558375,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:03:48.0 video 1>, the empty mug that was moved earlier is not visible. Based on the last known position of the empty mug, and the position of the marked box of stock cubes in the current frame, how far is the empty mug from thebox of stock cubes?",
          choices: ["very close", "medium", "far", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "f9f5c658de80a76c",
            object_x_name: "empty mug",
            object_x_reference_time_sec: 228.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "d5b1a639aef5b172",
            object_y_name: "box of stock cubes",
            object_y_pixel: [765.7097178498701, 791.4649075602192],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.6372439386389295, 1.0516895909937352, -0.9484185304124885,
            ],
            distance_m: 2.164743961590901,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.5438279246092828, 0.5621199627558375,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_9: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "3ca360d7506fd255",
    object_a_name: "carrot piece",
    query_time_sec: 228.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 220.0,
    clip_end_time_sec: 228.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "3ca360d7506fd255",
      object_name: "carrot piece",
      query_time_sec: 228.0,
      oos_span_start_sec: 223.0,
      oos_span_end_sec: 234.0,
      oos_duration_sec: 11.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 220.0,
      clip_end_time_sec: 228.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "d5b1a639aef5b172",
      anchor_name: "box of stock cubes",
      anchor_projected_pixel: [765.7097178498701, 791.4649075602192],
      anchor_world_coordinates: [
        -0.5027108512379408, -1.561959642955106, -0.5574559334251779,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_9",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:03:48.0 video 1>, is the previously moved carrot piece visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.4717265290966066, 0.9242463570119847, -0.7199729797981249,
          ],
          frame_index: 4370,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved carrot piece last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 222.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:03:42.0 video 1>",
          projected_pixel: [1043.5293802911942, 579.8407114049197],
          normalized_projected_pixel: [0.7411430257749959, 0.41181868707735775],
          camera_coordinates: [
            0.3507930565461699, -0.1324181149706578, 0.6067816965720798,
          ],
          frame_index: 4370,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved carrot piece stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 145.66666666666666,
          last_placement_time_in_clip_sec: -74.33333333333334,
          last_placement_time_token: "<TIME 00:02:25.7 video 1>",
          projected_pixel: [923.8953100923059, 1056.0664264266118],
          normalized_projected_pixel: [0.6561756463723764, 0.7500471778598095],
          camera_coordinates: [
            0.10389449390734984, 0.1611518170809152, 0.27244176725214286,
          ],
          frame_index: 4370,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:03:48.0 video 1>, based on the last known position of the carrot piece that was moved earlier,which fixture is closest to it?",
        choices: ["counter", "shelf", "sink", "fridgefreezer", "drawer"],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 222.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.007",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:03:48.0 video 1>, the carrot piece that was moved earlier is not visible. Based on its last known position, in which direction is the carrot piece from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 228.0,
            camera_coordinates: [
              1.4717265290966066, 0.9242463570119847, -0.7199729797981249,
            ],
            world_coordinates: [
              -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.4717265290966066,
              z: -0.7199729797981249,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:03:48.0 video 1>, the carrot piece that was moved earlier is not visible. Based on the last known position of the carrot piece and the position of the marked box of stock cubes in the current frame, where is the carrot piece relative to box of stock cubes from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "3ca360d7506fd255",
            object_x_name: "carrot piece",
            object_x_reference_time_sec: 228.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
            ],
            object_x_camera_coordinates: [
              1.4717265290966066, 0.9242463570119847, -0.7199729797981249,
            ],
            object_y_assoc_id: "d5b1a639aef5b172",
            object_y_name: "box of stock cubes",
            object_y_reference_time_sec: 228.0,
            object_y_world_coordinates: [
              -0.5027108512379408, -1.561959642955106, -0.5574559334251779,
            ],
            object_y_projected_pixel: [765.7097178498701, 791.4649075602192],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.5438279246092828, 0.5621199627558375,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:03:48.0 video 1>, the carrot piece that was moved earlier is not visible. Based on the last known position of the carrot piece, and the position of the marked box of stock cubes in the current frame, how far is the carrot piece from thebox of stock cubes?",
          choices: ["medium", "far", "close", "very close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "3ca360d7506fd255",
            object_x_name: "carrot piece",
            object_x_reference_time_sec: 228.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "d5b1a639aef5b172",
            object_y_name: "box of stock cubes",
            object_y_pixel: [765.7097178498701, 791.4649075602192],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.4263966754254227, 0.8674140212088377, -1.1415244315745747,
            ],
            distance_m: 2.0223977323306213,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.5438279246092828, 0.5621199627558375,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_10: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "51668af48d1a7842",
    object_a_name: "bag of flour",
    query_time_sec: 228.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 220.0,
    clip_end_time_sec: 228.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "51668af48d1a7842",
      object_name: "bag of flour",
      query_time_sec: 228.0,
      oos_span_start_sec: 223.0,
      oos_span_end_sec: 234.0,
      oos_duration_sec: 11.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 220.0,
      clip_end_time_sec: 228.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "d5b1a639aef5b172",
      anchor_name: "box of stock cubes",
      anchor_projected_pixel: [765.7097178498701, 791.4649075602192],
      anchor_world_coordinates: [
        -0.5027108512379408, -1.561959642955106, -0.5574559334251779,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_10",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:03:48.0 video 1>, is the previously moved bag of flour visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.2830608463699644, 1.0341170307735301, -0.6180633649266056,
          ],
          frame_index: 6313,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved bag of flour last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 222.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:03:42.0 video 1>",
          projected_pixel: [1253.2891405349299, 738.522854667614],
          normalized_projected_pixel: [0.8901201282208309, 0.5245190729173395],
          camera_coordinates: [
            0.4761293919771066, 0.024871565144053198, 0.4741067782757309,
          ],
          frame_index: 6313,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5361807101323421, -3.13597718783123, -0.4082206440398749,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved bag of flour stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 210.43333333333334,
          last_placement_time_in_clip_sec: -9.566666666666663,
          last_placement_time_token: "<TIME 00:03:30.4 video 1>",
          projected_pixel: [916.7160544861033, 1058.0573582464567],
          normalized_projected_pixel: [0.651076743242971, 0.7514611919364039],
          camera_coordinates: [
            0.1535411332968899, 0.247475619869006, 0.41629383668745445,
          ],
          frame_index: 6313,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5361807101323421, -3.13597718783123, -0.4082206440398749,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:03:48.0 video 1>, based on the last known position of the bag of flour that was moved earlier,which fixture is closest to it?",
        choices: ["bin", "drawer", "oven", "sink", "counter"],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 222.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.007",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:03:48.0 video 1>, the bag of flour that was moved earlier is not visible. Based on its last known position, in which direction is the bag of flour from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 228.0,
            camera_coordinates: [
              1.2830608463699644, 1.0341170307735301, -0.6180633649266056,
            ],
            world_coordinates: [
              -1.5361807101323421, -3.13597718783123, -0.4082206440398749,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.2830608463699644,
              z: -0.6180633649266056,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:03:48.0 video 1>, the bag of flour that was moved earlier is not visible. Based on the last known position of the bag of flour and the position of the marked box of stock cubes in the current frame, where is the bag of flour relative to box of stock cubes from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "51668af48d1a7842",
            object_x_name: "bag of flour",
            object_x_reference_time_sec: 228.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5361807101323421, -3.13597718783123, -0.4082206440398749,
            ],
            object_x_camera_coordinates: [
              1.2830608463699644, 1.0341170307735301, -0.6180633649266056,
            ],
            object_y_assoc_id: "d5b1a639aef5b172",
            object_y_name: "box of stock cubes",
            object_y_reference_time_sec: 228.0,
            object_y_world_coordinates: [
              -0.5027108512379408, -1.561959642955106, -0.5574559334251779,
            ],
            object_y_projected_pixel: [765.7097178498701, 791.4649075602192],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.5438279246092828, 0.5621199627558375,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:03:48.0 video 1>, the bag of flour that was moved earlier is not visible. Based on the last known position of the bag of flour, and the position of the marked box of stock cubes in the current frame, how far is the bag of flour from thebox of stock cubes?",
          choices: ["very close", "close", "far", "medium"],
          correct_idx: 3,
          answer_metadata: {
            object_x_assoc_id: "51668af48d1a7842",
            object_x_name: "bag of flour",
            object_x_reference_time_sec: 228.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "d5b1a639aef5b172",
            object_y_name: "box of stock cubes",
            object_y_pixel: [765.7097178498701, 791.4649075602192],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.2377309926987805, 0.9772846949703831, -1.0396148167030552,
            ],
            distance_m: 1.8888785965273127,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.5438279246092828, 0.5621199627558375,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_11: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "51668af48d1a7842",
    object_a_name: "bag of flour",
    query_time_sec: 249.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 241.0,
    clip_end_time_sec: 249.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "51668af48d1a7842",
      object_name: "bag of flour",
      query_time_sec: 249.0,
      oos_span_start_sec: 244.0,
      oos_span_end_sec: 419.0,
      oos_duration_sec: 175.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 241.0,
      clip_end_time_sec: 249.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "7b4238cb675c8cc9",
      anchor_name: "kettle",
      anchor_projected_pixel: [1074.2097727935375, 894.6760215567192],
      anchor_world_coordinates: [
        -0.14313805794458712, -3.437758360301628, -0.4603667141428952,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_11",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:04:09.0 video 1>, is the previously moved bag of flour visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.2135904787694134, 0.8819163030830086, -0.6236014148088893,
          ],
          frame_index: 6313,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved bag of flour last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 243.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:04:03.0 video 1>",
          projected_pixel: [782.5278576266137, 310.0033998792044],
          normalized_projected_pixel: [0.5557726261552655, 0.22017286923238946],
          camera_coordinates: [
            0.07285377813545613, -0.354374460670837, 0.5205568506878577,
          ],
          frame_index: 6313,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5361807101323421, -3.13597718783123, -0.4082206440398749,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved bag of flour stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 210.43333333333334,
          last_placement_time_in_clip_sec: -30.566666666666663,
          last_placement_time_token: "<TIME 00:03:30.4 video 1>",
          projected_pixel: [916.7160544861033, 1058.0573582464567],
          normalized_projected_pixel: [0.651076743242971, 0.7514611919364039],
          camera_coordinates: [
            0.1535411332968899, 0.247475619869006, 0.41629383668745445,
          ],
          frame_index: 6313,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5361807101323421, -3.13597718783123, -0.4082206440398749,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:04:09.0 video 1>, based on the last known position of the bag of flour that was moved earlier,which fixture is closest to it?",
        choices: ["counter", "bin", "cupboard", "microwave", "shelf"],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 243.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.007",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:04:09.0 video 1>, the bag of flour that was moved earlier is not visible. Based on its last known position, in which direction is the bag of flour from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 249.0,
            camera_coordinates: [
              -0.2135904787694134, 0.8819163030830086, -0.6236014148088893,
            ],
            world_coordinates: [
              -1.5361807101323421, -3.13597718783123, -0.4082206440398749,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.2135904787694134,
              z: -0.6236014148088893,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:04:09.0 video 1>, the bag of flour that was moved earlier is not visible. Based on the last known position of the bag of flour and the position of the marked kettle in the current frame, where is the bag of flour relative to kettle from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "51668af48d1a7842",
            object_x_name: "bag of flour",
            object_x_reference_time_sec: 249.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5361807101323421, -3.13597718783123, -0.4082206440398749,
            ],
            object_x_camera_coordinates: [
              -0.2135904787694134, 0.8819163030830086, -0.6236014148088893,
            ],
            object_y_assoc_id: "7b4238cb675c8cc9",
            object_y_name: "kettle",
            object_y_reference_time_sec: 249.0,
            object_y_world_coordinates: [
              -0.14313805794458712, -3.437758360301628, -0.4603667141428952,
            ],
            object_y_projected_pixel: [1074.2097727935375, 894.6760215567192],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.7629330772681374, 0.6354233107647154,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:04:09.0 video 1>, the bag of flour that was moved earlier is not visible. Based on the last known position of the bag of flour, and the position of the marked kettle in the current frame, how far is the bag of flour from thekettle?",
          choices: ["medium", "close", "far", "very close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "51668af48d1a7842",
            object_x_name: "bag of flour",
            object_x_reference_time_sec: 249.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "7b4238cb675c8cc9",
            object_y_name: "kettle",
            object_y_pixel: [1074.2097727935375, 894.6760215567192],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.5238495119825641, 0.7281582564236571, -1.1089301880176134,
            ],
            distance_m: 1.4263095454700885,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.7629330772681374, 0.6354233107647154,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_12: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "7b4238cb675c8cc9",
    object_a_name: "kettle",
    query_time_sec: 325.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 317.0,
    clip_end_time_sec: 325.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "7b4238cb675c8cc9",
      object_name: "kettle",
      query_time_sec: 325.0,
      oos_span_start_sec: 320.0,
      oos_span_end_sec: 352.0,
      oos_duration_sec: 32.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 0,
      clip_start_time_sec: 317.0,
      clip_end_time_sec: 325.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "56a7e30a6aab9f87",
      anchor_name: "sponge",
      anchor_projected_pixel: [1015.0053075912047, 883.7351536526782],
      anchor_world_coordinates: [
        -0.8897858951455611, -3.9815549040160865, -0.4735239292635788,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_12",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:25.0 video 1>, is the previously moved kettle visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-514.6071254944507, 1178.0932557606075],
          camera_coordinates: [
            -0.6233525719458681, 0.23716756228023628, 0.20859979692654962,
          ],
          frame_index: 1184,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved kettle last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 319.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:05:19.0 video 1>",
          projected_pixel: [296.36783496358277, 1000.1988676693967],
          normalized_projected_pixel: [0.21048851915027186, 0.710368513969742],
          camera_coordinates: [
            -0.37701433050450284, 0.2711097202295354, 0.5299375866517209,
          ],
          frame_index: 1184,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.14313805794458712, -3.437758360301628, -0.4603667141428952,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved kettle stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 39.46666666666667,
          last_placement_time_in_clip_sec: -277.5333333333333,
          last_placement_time_token: "<TIME 00:00:39.5 video 1>",
          projected_pixel: [1227.3203241804836, 1128.4446498905281],
          normalized_projected_pixel: [0.8716763666054571, 0.8014521661154319],
          camera_coordinates: [
            0.3911065755843901, 0.31091558976300093, 0.36855201176318797,
          ],
          frame_index: 1184,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.14313805794458712, -3.437758360301628, -0.4603667141428952,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:05:25.0 video 1>, based on the last known position of the kettle that was moved earlier,which fixture is closest to it?",
        choices: ["fridgefreezer", "bin", "counter", "hob", "shelf"],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 319.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.003",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:05:25.0 video 1>, the kettle that was moved earlier is not visible. Based on its last known position, in which direction is the kettle from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 325.0,
            camera_coordinates: [
              -0.6233525719458681, 0.23716756228023628, 0.20859979692654962,
            ],
            world_coordinates: [
              -0.14313805794458712, -3.437758360301628, -0.4603667141428952,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.6233525719458681,
              z: 0.20859979692654962,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:05:25.0 video 1>, the kettle that was moved earlier is not visible. Based on the last known position of the kettle and the position of the marked sponge in the current frame, where is the kettle relative to sponge from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "7b4238cb675c8cc9",
            object_x_name: "kettle",
            object_x_reference_time_sec: 325.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.14313805794458712, -3.437758360301628, -0.4603667141428952,
            ],
            object_x_camera_coordinates: [
              -0.6233525719458681, 0.23716756228023628, 0.20859979692654962,
            ],
            object_y_assoc_id: "56a7e30a6aab9f87",
            object_y_name: "sponge",
            object_y_reference_time_sec: 325.0,
            object_y_world_coordinates: [
              -0.8897858951455611, -3.9815549040160865, -0.4735239292635788,
            ],
            object_y_projected_pixel: [1015.0053075912047, 883.7351536526782],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.7208844514142079, 0.6276528079919589,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:05:25.0 video 1>, the kettle that was moved earlier is not visible. Based on the last known position of the kettle, and the position of the marked sponge in the current frame, how far is the kettle from thesponge?",
          choices: ["medium", "very close", "far", "close"],
          correct_idx: 3,
          answer_metadata: {
            object_x_assoc_id: "7b4238cb675c8cc9",
            object_x_name: "kettle",
            object_x_reference_time_sec: 325.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "56a7e30a6aab9f87",
            object_y_name: "sponge",
            object_y_pixel: [1015.0053075912047, 883.7351536526782],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.8775491719256743, 0.09631124705286176, -0.2720337857805548,
            ],
            distance_m: 0.9237807023652392,
            distance_bucket: "close",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.7208844514142079, 0.6276528079919589,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_13: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "f9f5c658de80a76c",
    object_a_name: "empty mug",
    query_time_sec: 326.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 318.0,
    clip_end_time_sec: 326.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "f9f5c658de80a76c",
      object_name: "empty mug",
      query_time_sec: 326.0,
      oos_span_start_sec: 321.0,
      oos_span_end_sec: 351.0,
      oos_duration_sec: 30.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 2,
      clip_start_time_sec: 318.0,
      clip_end_time_sec: 326.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "56a7e30a6aab9f87",
      anchor_name: "sponge",
      anchor_projected_pixel: [1040.9212387851853, 883.161603397601],
      anchor_world_coordinates: [
        -0.8897858951455611, -3.9815549040160865, -0.4735239292635788,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_13",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:26.0 video 1>, is the previously moved empty mug visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-9202.48876533352, 111891.52060111881],
          camera_coordinates: [
            0.6068988173939855, 0.6375082390640843, 0.06329997671315901,
          ],
          frame_index: 4152,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved empty mug last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 320.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:05:20.0 video 1>",
          projected_pixel: [1267.8675001149022, 1058.2679959876177],
          normalized_projected_pixel: [0.9004740767861521, 0.7516107926048421],
          camera_coordinates: [
            0.5447211910432077, 0.33465389837631454, 0.4810083848102713,
          ],
          frame_index: 4152,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved empty mug stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 138.4,
          last_placement_time_in_clip_sec: -179.6,
          last_placement_time_token: "<TIME 00:02:18.4 video 1>",
          projected_pixel: [930.990367957302, 1045.6902180318134],
          normalized_projected_pixel: [0.6612147499696748, 0.742677711670322],
          camera_coordinates: [
            0.2162334101514618, 0.3153457453056905, 0.5503926968016559,
          ],
          frame_index: 4152,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:05:26.0 video 1>, based on the last known position of the empty mug that was moved earlier,which fixture is closest to it?",
        choices: ["cupboard", "counter", "sink", "bin", "drawer"],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 320.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.007",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:05:26.0 video 1>, the empty mug that was moved earlier is not visible. Based on its last known position, in which direction is the empty mug from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 326.0,
            camera_coordinates: [
              0.6068988173939855, 0.6375082390640843, 0.06329997671315901,
            ],
            world_coordinates: [
              -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.6068988173939855,
              z: 0.06329997671315901,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:05:26.0 video 1>, the empty mug that was moved earlier is not visible. Based on the last known position of the empty mug and the position of the marked sponge in the current frame, where is the empty mug relative to sponge from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "f9f5c658de80a76c",
            object_x_name: "empty mug",
            object_x_reference_time_sec: 326.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
            ],
            object_x_camera_coordinates: [
              0.6068988173939855, 0.6375082390640843, 0.06329997671315901,
            ],
            object_y_assoc_id: "56a7e30a6aab9f87",
            object_y_name: "sponge",
            object_y_reference_time_sec: 326.0,
            object_y_world_coordinates: [
              -0.8897858951455611, -3.9815549040160865, -0.4735239292635788,
            ],
            object_y_projected_pixel: [1040.9212387851853, 883.161603397601],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.7392906525462964, 0.6272454569585234,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:05:26.0 video 1>, the empty mug that was moved earlier is not visible. Based on the last known position of the empty mug, and the position of the marked sponge in the current frame, how far is the empty mug from thesponge?",
          choices: ["medium", "close", "very close", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "f9f5c658de80a76c",
            object_x_name: "empty mug",
            object_x_reference_time_sec: 326.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "56a7e30a6aab9f87",
            object_y_name: "sponge",
            object_y_pixel: [1040.9212387851853, 883.161603397601],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.33729432684978056, 0.4999416685530136, -0.4047527808527205,
            ],
            distance_m: 0.7263153230440814,
            distance_bucket: "close",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.7392906525462964, 0.6272454569585234,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_14: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "f9f5c658de80a76c",
    object_a_name: "empty mug",
    query_time_sec: 358.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 350.0,
    clip_end_time_sec: 358.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "f9f5c658de80a76c",
      object_name: "empty mug",
      query_time_sec: 358.0,
      oos_span_start_sec: 353.0,
      oos_span_end_sec: 393.0,
      oos_duration_sec: 40.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 2,
      clip_start_time_sec: 350.0,
      clip_end_time_sec: 358.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "b3814d3e40f4c501",
      anchor_name: "one cube of stock",
      anchor_projected_pixel: [649.5882118460195, 788.7263339577311],
      anchor_world_coordinates: [
        -0.6496338461252711, -2.5297159762943187, -0.6535088773193375,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_14",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:58.0 video 1>, is the previously moved empty mug visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.17762769499003317, 1.0202682116025477, -0.24019719043471022,
          ],
          frame_index: 4152,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved empty mug last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 352.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:05:52.0 video 1>",
          projected_pixel: [1110.8308632323847, 988.1777408684521],
          normalized_projected_pixel: [0.7889423744548186, 0.7018307818667984],
          camera_coordinates: [
            0.42506118756175293, 0.2886690169002013, 0.58738158886776,
          ],
          frame_index: 4152,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved empty mug stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 138.4,
          last_placement_time_in_clip_sec: -211.6,
          last_placement_time_token: "<TIME 00:02:18.4 video 1>",
          projected_pixel: [930.990367957302, 1045.6902180318134],
          normalized_projected_pixel: [0.6612147499696748, 0.742677711670322],
          camera_coordinates: [
            0.2162334101514618, 0.3153457453056905, 0.5503926968016559,
          ],
          frame_index: 4152,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:05:58.0 video 1>, based on the last known position of the empty mug that was moved earlier,which fixture is closest to it?",
        choices: ["hob", "cupboard", "bin", "counter", "drawer"],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 352.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.007",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:05:58.0 video 1>, the empty mug that was moved earlier is not visible. Based on its last known position, in which direction is the empty mug from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 358.0,
            camera_coordinates: [
              -0.17762769499003317, 1.0202682116025477, -0.24019719043471022,
            ],
            world_coordinates: [
              -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.17762769499003317,
              z: -0.24019719043471022,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:05:58.0 video 1>, the empty mug that was moved earlier is not visible. Based on the last known position of the empty mug and the position of the marked one cube of stock in the current frame, where is the empty mug relative to one cube of stock from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "f9f5c658de80a76c",
            object_x_name: "empty mug",
            object_x_reference_time_sec: 358.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
            ],
            object_x_camera_coordinates: [
              -0.17762769499003317, 1.0202682116025477, -0.24019719043471022,
            ],
            object_y_assoc_id: "b3814d3e40f4c501",
            object_y_name: "one cube of stock",
            object_y_reference_time_sec: 358.0,
            object_y_world_coordinates: [
              -0.6496338461252711, -2.5297159762943187, -0.6535088773193375,
            ],
            object_y_projected_pixel: [649.5882118460195, 788.7263339577311],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.4613552640951843, 0.5601749530949794,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:05:58.0 video 1>, the empty mug that was moved earlier is not visible. Based on the last known position of the empty mug, and the position of the marked one cube of stock in the current frame, how far is the empty mug from theone cube of stock?",
          choices: ["medium", "close", "far", "very close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "f9f5c658de80a76c",
            object_x_name: "empty mug",
            object_x_reference_time_sec: 358.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "b3814d3e40f4c501",
            object_y_name: "one cube of stock",
            object_y_pixel: [649.5882118460195, 788.7263339577311],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.12841650241164304, 0.9428663326024567, -0.8341854237471039,
            ],
            distance_m: 1.265445787238229,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.4613552640951843, 0.5601749530949794,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_15: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "4834a5a5778ef81c",
    object_a_name: "pen",
    query_time_sec: 361.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 353.0,
    clip_end_time_sec: 361.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "4834a5a5778ef81c",
      object_name: "pen",
      query_time_sec: 361.0,
      oos_span_start_sec: 356.0,
      oos_span_end_sec: 419.0,
      oos_duration_sec: 63.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.009",
      relocation_score: 0,
      clip_start_time_sec: 353.0,
      clip_end_time_sec: 361.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "9df836d37764b630",
      anchor_name: "tupperware",
      anchor_projected_pixel: [632.0536735863957, 702.1775837740475],
      anchor_world_coordinates: [
        -0.4358742692297094, -3.8047511356191013, -0.5556573583242533,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_15",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:01.0 video 1>, is the previously moved pen visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.08901522034654663, 1.271893718648058, -0.8130744453559575,
          ],
          frame_index: 2503,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved pen last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 355.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:05:55.0 video 1>",
          projected_pixel: [576.7973585637262, 1003.0095788703552],
          normalized_projected_pixel: [0.4096572148890101, 0.7123647577204227],
          camera_coordinates: [
            -0.21424911338168395, 0.5094680389688813, 1.0435321789871237,
          ],
          frame_index: 2503,
          status: "in_view",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved pen stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 83.43333333333334,
          last_placement_time_in_clip_sec: -269.56666666666666,
          last_placement_time_token: "<TIME 00:01:23.4 video 1>",
          projected_pixel: [980.0791322432808, 1155.3748954852601],
          normalized_projected_pixel: [0.6960789291500574, 0.820578760998054],
          camera_coordinates: [
            0.21431793397450116, 0.3418479305437464, 0.428872909662251,
          ],
          frame_index: 2503,
          status: "last_past_track_end",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:01.0 video 1>, based on the last known position of the pen that was moved earlier,which fixture is closest to it?",
        choices: ["fridgefreezer", "dishwasher", "oven", "counter", "shelf"],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 355.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.009",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:01.0 video 1>, the pen that was moved earlier is not visible. Based on its last known position, in which direction is the pen from your viewpoint?",
          choices: ["Back-left", "Front-right", "Back-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 361.0,
            camera_coordinates: [
              0.08901522034654663, 1.271893718648058, -0.8130744453559575,
            ],
            world_coordinates: [
              -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.08901522034654663,
              z: -0.8130744453559575,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:01.0 video 1>, the pen that was moved earlier is not visible. Based on the last known position of the pen and the position of the marked tupperware in the current frame, where is the pen relative to tupperware from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "4834a5a5778ef81c",
            object_x_name: "pen",
            object_x_reference_time_sec: 361.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
            ],
            object_x_camera_coordinates: [
              0.08901522034654663, 1.271893718648058, -0.8130744453559575,
            ],
            object_y_assoc_id: "9df836d37764b630",
            object_y_name: "tupperware",
            object_y_reference_time_sec: 361.0,
            object_y_world_coordinates: [
              -0.4358742692297094, -3.8047511356191013, -0.5556573583242533,
            ],
            object_y_projected_pixel: [632.0536735863957, 702.1775837740475],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.4489017568085197, 0.49870567029406787,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:01.0 video 1>, the pen that was moved earlier is not visible. Based on the last known position of the pen, and the position of the marked tupperware in the current frame, how far is the pen from thetupperware?",
          choices: ["close", "medium", "far", "very close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "4834a5a5778ef81c",
            object_x_name: "pen",
            object_x_reference_time_sec: 361.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "9df836d37764b630",
            object_y_name: "tupperware",
            object_y_pixel: [632.0536735863957, 702.1775837740475],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.17598749143462333, 1.2809137870452256, -1.5921606733190818,
            ],
            distance_m: 2.051021047343948,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.4489017568085197, 0.49870567029406787,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_16: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "039f7e7efd96f484",
    object_a_name: "spatula",
    query_time_sec: 399.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 391.0,
    clip_end_time_sec: 399.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "039f7e7efd96f484",
      object_name: "spatula",
      query_time_sec: 399.0,
      oos_span_start_sec: 394.0,
      oos_span_end_sec: 413.0,
      oos_duration_sec: 19.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 391.0,
      clip_end_time_sec: 399.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "9df836d37764b630",
      anchor_name: "tupperware",
      anchor_projected_pixel: [385.96453190327674, 967.7939038516829],
      anchor_world_coordinates: [
        -0.4358742692297094, -3.8047511356191013, -0.5556573583242533,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_16",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:39.0 video 1>, is the previously moved spatula visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.7553427809410846, 0.8074843683078966, -0.38581843753558287,
          ],
          frame_index: 5005,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved spatula last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 393.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:06:33.0 video 1>",
          projected_pixel: [20.934812278537493, 689.246840976771],
          normalized_projected_pixel: [
            0.014868474629643106, 0.48952190410282026,
          ],
          camera_coordinates: [
            -0.393281435637296, -0.011988472197423272, 0.28543958937266584,
          ],
          frame_index: 5005,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3996929235133511, -2.6314488801133136, -0.5524938701650501,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved spatula stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 166.83333333333334,
          last_placement_time_in_clip_sec: -224.16666666666666,
          last_placement_time_token: "<TIME 00:02:46.8 video 1>",
          projected_pixel: [1163.0361082101085, 1138.1635864796554],
          normalized_projected_pixel: [0.8260199632174067, 0.808354819942937],
          camera_coordinates: [
            0.36305404673523833, 0.33642767237080734, 0.40914144326217494,
          ],
          frame_index: 5005,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3996929235133511, -2.6314488801133136, -0.5524938701650501,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:39.0 video 1>, based on the last known position of the spatula that was moved earlier,which fixture is closest to it?",
        choices: ["cupboard", "counter", "fridgefreezer", "hob", "drawer"],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 393.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.002",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:39.0 video 1>, the spatula that was moved earlier is not visible. Based on its last known position, in which direction is the spatula from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 399.0,
            camera_coordinates: [
              -0.7553427809410846, 0.8074843683078966, -0.38581843753558287,
            ],
            world_coordinates: [
              -0.3996929235133511, -2.6314488801133136, -0.5524938701650501,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.7553427809410846,
              z: -0.38581843753558287,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:39.0 video 1>, the spatula that was moved earlier is not visible. Based on the last known position of the spatula and the position of the marked tupperware in the current frame, where is the spatula relative to tupperware from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "039f7e7efd96f484",
            object_x_name: "spatula",
            object_x_reference_time_sec: 399.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3996929235133511, -2.6314488801133136, -0.5524938701650501,
            ],
            object_x_camera_coordinates: [
              -0.7553427809410846, 0.8074843683078966, -0.38581843753558287,
            ],
            object_y_assoc_id: "9df836d37764b630",
            object_y_name: "tupperware",
            object_y_reference_time_sec: 399.0,
            object_y_world_coordinates: [
              -0.4358742692297094, -3.8047511356191013, -0.5556573583242533,
            ],
            object_y_projected_pixel: [385.96453190327674, 967.7939038516829],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.27412253686312266, 0.6873536248946611,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:39.0 video 1>, the spatula that was moved earlier is not visible. Based on the last known position of the spatula, and the position of the marked tupperware in the current frame, how far is the spatula from thetupperware?",
          choices: ["close", "far", "very close", "medium"],
          correct_idx: 3,
          answer_metadata: {
            object_x_assoc_id: "039f7e7efd96f484",
            object_x_name: "spatula",
            object_x_reference_time_sec: 399.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "9df836d37764b630",
            object_y_name: "tupperware",
            object_y_pixel: [385.96453190327674, 967.7939038516829],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.48112783673731396, 0.5821710810129882, -0.8986379233922803,
            ],
            distance_m: 1.173864251185012,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.27412253686312266, 0.6873536248946611,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_17: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "f9f5c658de80a76c",
    object_a_name: "empty mug",
    query_time_sec: 414.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 406.0,
    clip_end_time_sec: 414.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "f9f5c658de80a76c",
      object_name: "empty mug",
      query_time_sec: 414.0,
      oos_span_start_sec: 409.0,
      oos_span_end_sec: 422.0,
      oos_duration_sec: 13.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 2,
      clip_start_time_sec: 406.0,
      clip_end_time_sec: 414.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "039f7e7efd96f484",
      anchor_name: "spatula",
      anchor_projected_pixel: [528.7388771859488, 706.3620098955579],
      anchor_world_coordinates: [
        -0.3996929235133511, -2.6314488801133136, -0.5524938701650501,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_17",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:54.0 video 1>, is the previously moved empty mug visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.08150161826693392, 0.7704193270175573, -0.16178466976434835,
          ],
          frame_index: 4152,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved empty mug last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 408.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:06:48.0 video 1>",
          projected_pixel: [1098.047150858583, 1049.5901879867251],
          normalized_projected_pixel: [0.7798630332802436, 0.7454475766951173],
          camera_coordinates: [
            0.3602097655956866, 0.3081405889492008, 0.507364276846586,
          ],
          frame_index: 4152,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved empty mug stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 138.4,
          last_placement_time_in_clip_sec: -267.6,
          last_placement_time_token: "<TIME 00:02:18.4 video 1>",
          projected_pixel: [930.990367957302, 1045.6902180318134],
          normalized_projected_pixel: [0.6612147499696748, 0.742677711670322],
          camera_coordinates: [
            0.2162334101514618, 0.3153457453056905, 0.5503926968016559,
          ],
          frame_index: 4152,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:06:54.0 video 1>, based on the last known position of the empty mug that was moved earlier,which fixture is closest to it?",
        choices: ["dishwasher", "counter", "fridgefreezer", "hob", "sink"],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 408.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.007",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:06:54.0 video 1>, the empty mug that was moved earlier is not visible. Based on its last known position, in which direction is the empty mug from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 414.0,
            camera_coordinates: [
              0.08150161826693392, 0.7704193270175573, -0.16178466976434835,
            ],
            world_coordinates: [
              -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.08150161826693392,
              z: -0.16178466976434835,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:06:54.0 video 1>, the empty mug that was moved earlier is not visible. Based on the last known position of the empty mug and the position of the marked spatula in the current frame, where is the empty mug relative to spatula from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "f9f5c658de80a76c",
            object_x_name: "empty mug",
            object_x_reference_time_sec: 414.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
            ],
            object_x_camera_coordinates: [
              0.08150161826693392, 0.7704193270175573, -0.16178466976434835,
            ],
            object_y_assoc_id: "039f7e7efd96f484",
            object_y_name: "spatula",
            object_y_reference_time_sec: 414.0,
            object_y_world_coordinates: [
              -0.3996929235133511, -2.6314488801133136, -0.5524938701650501,
            ],
            object_y_projected_pixel: [528.7388771859488, 706.3620098955579],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.3755247707286568, 0.5016775638462769,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:54.0 video 1>, the empty mug that was moved earlier is not visible. Based on the last known position of the empty mug, and the position of the marked spatula in the current frame, how far is the empty mug from thespatula?",
          choices: ["medium", "far", "close", "very close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "f9f5c658de80a76c",
            object_x_name: "empty mug",
            object_x_reference_time_sec: 414.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "039f7e7efd96f484",
            object_y_name: "spatula",
            object_y_pixel: [528.7388771859488, 706.3620098955579],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.33665811853306193, 0.7747331702744875, -1.070245203555881,
            ],
            distance_m: 1.3634423235443984,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.3755247707286568, 0.5016775638462769,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_18: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "7b4238cb675c8cc9",
    object_a_name: "kettle",
    query_time_sec: 420.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 412.0,
    clip_end_time_sec: 420.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "7b4238cb675c8cc9",
      object_name: "kettle",
      query_time_sec: 420.0,
      oos_span_start_sec: 415.0,
      oos_span_end_sec: 425.0,
      oos_duration_sec: 10.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 0,
      clip_start_time_sec: 412.0,
      clip_end_time_sec: 420.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "4834a5a5778ef81c",
      anchor_name: "pen",
      anchor_projected_pixel: [933.1268221380568, 938.5273438537157],
      anchor_world_coordinates: [
        -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_18",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:07:00.0 video 1>, is the previously moved kettle visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.21241551548014437, 0.5492316940242394, -0.8265859647358751,
          ],
          frame_index: 1184,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved kettle last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 414.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:06:54.0 video 1>",
          projected_pixel: [1181.691958799419, 551.5585814702794],
          normalized_projected_pixel: [0.83926985710186, 0.3917319470669598],
          camera_coordinates: [
            0.5265829839127694, -0.17293885872732562, 0.6170986062879431,
          ],
          frame_index: 1184,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.14313805794458712, -3.437758360301628, -0.4603667141428952,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved kettle stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 39.46666666666667,
          last_placement_time_in_clip_sec: -372.5333333333333,
          last_placement_time_token: "<TIME 00:00:39.5 video 1>",
          projected_pixel: [1227.3203241804836, 1128.4446498905281],
          normalized_projected_pixel: [0.8716763666054571, 0.8014521661154319],
          camera_coordinates: [
            0.3911065755843901, 0.31091558976300093, 0.36855201176318797,
          ],
          frame_index: 1184,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.14313805794458712, -3.437758360301628, -0.4603667141428952,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:07:00.0 video 1>, based on the last known position of the kettle that was moved earlier,which fixture is closest to it?",
        choices: ["dishwasher", "fridgefreezer", "sink", "bin", "counter"],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 414.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.003",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:07:00.0 video 1>, the kettle that was moved earlier is not visible. Based on its last known position, in which direction is the kettle from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 420.0,
            camera_coordinates: [
              0.21241551548014437, 0.5492316940242394, -0.8265859647358751,
            ],
            world_coordinates: [
              -0.14313805794458712, -3.437758360301628, -0.4603667141428952,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.21241551548014437,
              z: -0.8265859647358751,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:07:00.0 video 1>, the kettle that was moved earlier is not visible. Based on the last known position of the kettle and the position of the marked pen in the current frame, where is the kettle relative to pen from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "7b4238cb675c8cc9",
            object_x_name: "kettle",
            object_x_reference_time_sec: 420.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.14313805794458712, -3.437758360301628, -0.4603667141428952,
            ],
            object_x_camera_coordinates: [
              0.21241551548014437, 0.5492316940242394, -0.8265859647358751,
            ],
            object_y_assoc_id: "4834a5a5778ef81c",
            object_y_name: "pen",
            object_y_reference_time_sec: 420.0,
            object_y_world_coordinates: [
              -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
            ],
            object_y_projected_pixel: [933.1268221380568, 938.5273438537157],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.662732117995779, 0.6665677158051958,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:07:00.0 video 1>, the kettle that was moved earlier is not visible. Based on the last known position of the kettle, and the position of the marked pen in the current frame, how far is the kettle from thepen?",
          choices: ["far", "medium", "very close", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "7b4238cb675c8cc9",
            object_x_name: "kettle",
            object_x_reference_time_sec: 420.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "4834a5a5778ef81c",
            object_y_name: "pen",
            object_y_pixel: [933.1268221380568, 938.5273438537157],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.22294578551524014, 0.12067784206772803, -1.9481891291444462,
            ],
            distance_m: 1.9646141727478519,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.662732117995779, 0.6665677158051958,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_19: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "039f7e7efd96f484",
    object_a_name: "spatula",
    query_time_sec: 421.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 413.0,
    clip_end_time_sec: 421.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "039f7e7efd96f484",
      object_name: "spatula",
      query_time_sec: 421.0,
      oos_span_start_sec: 416.0,
      oos_span_end_sec: 426.0,
      oos_duration_sec: 10.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 413.0,
      clip_end_time_sec: 421.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "4834a5a5778ef81c",
      anchor_name: "pen",
      anchor_projected_pixel: [1065.5665665569597, 1094.954194888079],
      anchor_world_coordinates: [
        -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_19",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:07:01.0 video 1>, is the previously moved spatula visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.8201820431166742, 0.59306803803472, -0.49845611806923673,
          ],
          frame_index: 5005,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved spatula last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 415.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:06:55.0 video 1>",
          projected_pixel: [1032.126493759071, 679.0402611656058],
          normalized_projected_pixel: [0.7330443847720676, 0.4822729127596632],
          camera_coordinates: [
            0.2912647339448414, -0.026607687809131253, 0.5254679730828768,
          ],
          frame_index: 5005,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3996929235133511, -2.6314488801133136, -0.5524938701650501,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved spatula stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 166.83333333333334,
          last_placement_time_in_clip_sec: -246.16666666666666,
          last_placement_time_token: "<TIME 00:02:46.8 video 1>",
          projected_pixel: [1163.0361082101085, 1138.1635864796554],
          normalized_projected_pixel: [0.8260199632174067, 0.808354819942937],
          camera_coordinates: [
            0.36305404673523833, 0.33642767237080734, 0.40914144326217494,
          ],
          frame_index: 5005,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3996929235133511, -2.6314488801133136, -0.5524938701650501,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:07:01.0 video 1>, based on the last known position of the spatula that was moved earlier,which fixture is closest to it?",
        choices: ["microwave", "counter", "hob", "dishwasher", "bin"],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 415.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.002",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:07:01.0 video 1>, the spatula that was moved earlier is not visible. Based on its last known position, in which direction is the spatula from your viewpoint?",
          choices: ["Front-right", "Back-right", "Front-left", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 421.0,
            camera_coordinates: [
              0.8201820431166742, 0.59306803803472, -0.49845611806923673,
            ],
            world_coordinates: [
              -0.3996929235133511, -2.6314488801133136, -0.5524938701650501,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.8201820431166742,
              z: -0.49845611806923673,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:07:01.0 video 1>, the spatula that was moved earlier is not visible. Based on the last known position of the spatula and the position of the marked pen in the current frame, where is the spatula relative to pen from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "039f7e7efd96f484",
            object_x_name: "spatula",
            object_x_reference_time_sec: 421.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3996929235133511, -2.6314488801133136, -0.5524938701650501,
            ],
            object_x_camera_coordinates: [
              0.8201820431166742, 0.59306803803472, -0.49845611806923673,
            ],
            object_y_assoc_id: "4834a5a5778ef81c",
            object_y_name: "pen",
            object_y_reference_time_sec: 421.0,
            object_y_world_coordinates: [
              -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
            ],
            object_y_projected_pixel: [1065.5665665569597, 1094.954194888079],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.7567944364751135, 0.777666331596647,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:07:01.0 video 1>, the spatula that was moved earlier is not visible. Based on the last known position of the spatula, and the position of the marked pen in the current frame, how far is the spatula from thepen?",
          choices: ["medium", "close", "very close", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "039f7e7efd96f484",
            object_x_name: "spatula",
            object_x_reference_time_sec: 421.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "4834a5a5778ef81c",
            object_y_name: "pen",
            object_y_pixel: [1065.5665665569597, 1094.954194888079],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.33101642697207234, 0.07656940931065737, -1.2460129888369134,
            ],
            distance_m: 1.2915042073945553,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.7567944364751135, 0.777666331596647,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_20: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "56a7e30a6aab9f87",
    object_a_name: "sponge",
    query_time_sec: 432.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 424.0,
    clip_end_time_sec: 432.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "56a7e30a6aab9f87",
      object_name: "sponge",
      query_time_sec: 432.0,
      oos_span_start_sec: 427.0,
      oos_span_end_sec: 448.0,
      oos_duration_sec: 21.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.005",
      relocation_score: 1,
      clip_start_time_sec: 424.0,
      clip_end_time_sec: 432.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "f91c00bbec7fc1e7",
      anchor_name: "plate",
      anchor_projected_pixel: [727.8446194525067, 771.9950524321322],
      anchor_world_coordinates: [
        -0.5283502902464706, -2.595038770897233, -1.1587629641009936,
      ],
      anchor_status: "observed_visible_in_open_fixture",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_20",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:07:12.0 video 1>, is the previously moved sponge visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.1857018335018057, 1.190328849332181, -0.26583156802964747,
          ],
          frame_index: 12372,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved sponge last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 426.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:07:06.0 video 1>",
          projected_pixel: [1237.5738920529611, 975.4154013914017],
          normalized_projected_pixel: [0.8789587301512508, 0.6927666203063932],
          camera_coordinates: [
            0.42175268398242993, 0.20871175270571796, 0.41981772881390245,
          ],
          frame_index: 12372,
          status: "in_view",
          fixture: "P01_counter.005",
          world_coordinates: [
            -0.9123208465219563, -3.9810519685392745, -0.4940885709277505,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved sponge stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 412.4,
          last_placement_time_in_clip_sec: -11.600000000000023,
          last_placement_time_token: "<TIME 00:06:52.4 video 1>",
          projected_pixel: [1008.1187436806374, 920.1036501935856],
          normalized_projected_pixel: [0.7159934259095436, 0.6534827061033989],
          camera_coordinates: [
            0.2455374099910974, 0.16811620501198998, 0.4730132731862313,
          ],
          frame_index: 12372,
          status: "last_past_track_end",
          fixture: "P01_counter.005",
          world_coordinates: [
            -0.9123208465219563, -3.9810519685392745, -0.4940885709277505,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:07:12.0 video 1>, based on the last known position of the sponge that was moved earlier,which fixture is closest to it?",
        choices: ["hob", "oven", "counter", "dishwasher", "drawer"],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 426.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.005",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:07:12.0 video 1>, the sponge that was moved earlier is not visible. Based on its last known position, in which direction is the sponge from your viewpoint?",
          choices: ["Front-left", "Back-left", "Front-right", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 432.0,
            camera_coordinates: [
              0.1857018335018057, 1.190328849332181, -0.26583156802964747,
            ],
            world_coordinates: [
              -0.9123208465219563, -3.9810519685392745, -0.4940885709277505,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.1857018335018057,
              z: -0.26583156802964747,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:07:12.0 video 1>, the sponge that was moved earlier is not visible. Based on the last known position of the sponge and the position of the marked plate in the current frame, where is the sponge relative to plate from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "56a7e30a6aab9f87",
            object_x_name: "sponge",
            object_x_reference_time_sec: 432.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.9123208465219563, -3.9810519685392745, -0.4940885709277505,
            ],
            object_x_camera_coordinates: [
              0.1857018335018057, 1.190328849332181, -0.26583156802964747,
            ],
            object_y_assoc_id: "f91c00bbec7fc1e7",
            object_y_name: "plate",
            object_y_reference_time_sec: 432.0,
            object_y_world_coordinates: [
              -0.5283502902464706, -2.595038770897233, -1.1587629641009936,
            ],
            object_y_projected_pixel: [727.8446194525067, 771.9950524321322],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.5169350990429735, 0.5482919406478212,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:07:12.0 video 1>, the sponge that was moved earlier is not visible. Based on the last known position of the sponge, and the position of the marked plate in the current frame, how far is the sponge from theplate?",
          choices: ["far", "medium", "close", "very close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "56a7e30a6aab9f87",
            object_x_name: "sponge",
            object_x_reference_time_sec: 432.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "f91c00bbec7fc1e7",
            object_y_name: "plate",
            object_y_pixel: [727.8446194525067, 771.9950524321322],
            object_y_status: "observed_visible_in_open_fixture",
            vector_object_x_relative_to_object_y: [
              0.14641650015357352, 1.1014120281261408, -1.129474113845237,
            ],
            distance_m: 1.5843793804088222,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.5169350990429735, 0.5482919406478212,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_21: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "f9f5c658de80a76c",
    object_a_name: "empty mug",
    query_time_sec: 435.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 427.0,
    clip_end_time_sec: 435.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "f9f5c658de80a76c",
      object_name: "empty mug",
      query_time_sec: 435.0,
      oos_span_start_sec: 430.0,
      oos_span_end_sec: 448.0,
      oos_duration_sec: 18.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 2,
      clip_start_time_sec: 427.0,
      clip_end_time_sec: 435.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "4834a5a5778ef81c",
      anchor_name: "pen",
      anchor_projected_pixel: [898.9350946708885, 761.4278167975951],
      anchor_world_coordinates: [
        -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_21",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:07:15.0 video 1>, is the previously moved empty mug visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-7866.620912877146, 17031.04231642414],
          camera_coordinates: [
            -0.5957885472256348, 0.5739512331073459, 0.10121457259290001,
          ],
          frame_index: 4152,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved empty mug last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 429.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:07:09.0 video 1>",
          projected_pixel: [159.042539575285, 1141.0594308099585],
          normalized_projected_pixel: [0.112956349130174, 0.810411527563891],
          camera_coordinates: [
            -0.5225683909764367, 0.4156746283773554, 0.4666889423114795,
          ],
          frame_index: 4152,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved empty mug stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 138.4,
          last_placement_time_in_clip_sec: -288.6,
          last_placement_time_token: "<TIME 00:02:18.4 video 1>",
          projected_pixel: [930.990367957302, 1045.6902180318134],
          normalized_projected_pixel: [0.6612147499696748, 0.742677711670322],
          camera_coordinates: [
            0.2162334101514618, 0.3153457453056905, 0.5503926968016559,
          ],
          frame_index: 4152,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:07:15.0 video 1>, based on the last known position of the empty mug that was moved earlier,which fixture is closest to it?",
        choices: ["sink", "bin", "drawer", "counter", "fridgefreezer"],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 429.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.007",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:07:15.0 video 1>, the empty mug that was moved earlier is not visible. Based on its last known position, in which direction is the empty mug from your viewpoint?",
          choices: ["Back-right", "Front-left", "Front-right", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 435.0,
            camera_coordinates: [
              -0.5957885472256348, 0.5739512331073459, 0.10121457259290001,
            ],
            world_coordinates: [
              -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.5957885472256348,
              z: 0.10121457259290001,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:07:15.0 video 1>, the empty mug that was moved earlier is not visible. Based on the last known position of the empty mug and the position of the marked pen in the current frame, where is the empty mug relative to pen from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "f9f5c658de80a76c",
            object_x_name: "empty mug",
            object_x_reference_time_sec: 435.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4392934563851227, -3.5136056562840468, -0.5547574825294332,
            ],
            object_x_camera_coordinates: [
              -0.5957885472256348, 0.5739512331073459, 0.10121457259290001,
            ],
            object_y_assoc_id: "4834a5a5778ef81c",
            object_y_name: "pen",
            object_y_reference_time_sec: 435.0,
            object_y_world_coordinates: [
              -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
            ],
            object_y_projected_pixel: [898.9350946708885, 761.4278167975951],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.6384482206469378, 0.5407868017028374,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:07:15.0 video 1>, the empty mug that was moved earlier is not visible. Based on the last known position of the empty mug, and the position of the marked pen in the current frame, how far is the empty mug from thepen?",
          choices: ["very close", "close", "far", "medium"],
          correct_idx: 3,
          answer_metadata: {
            object_x_assoc_id: "f9f5c658de80a76c",
            object_x_name: "empty mug",
            object_x_reference_time_sec: 435.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "4834a5a5778ef81c",
            object_y_name: "pen",
            object_y_pixel: [898.9350946708885, 761.4278167975951],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.9387201779193299, 0.4839608802447468, -0.9496483053306948,
            ],
            distance_m: 1.4202977187398524,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.6384482206469378, 0.5407868017028374,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_22: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "3ca360d7506fd255",
    object_a_name: "carrot piece",
    query_time_sec: 435.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 427.0,
    clip_end_time_sec: 435.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "3ca360d7506fd255",
      object_name: "carrot piece",
      query_time_sec: 435.0,
      oos_span_start_sec: 430.0,
      oos_span_end_sec: 448.0,
      oos_duration_sec: 18.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 427.0,
      clip_end_time_sec: 435.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "4834a5a5778ef81c",
      anchor_name: "pen",
      anchor_projected_pixel: [898.9350946708885, 761.4278167975951],
      anchor_world_coordinates: [
        -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_22",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:07:15.0 video 1>, is the previously moved carrot piece visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-2063.7002520765373, 2196.6740792935498],
          camera_coordinates: [
            -0.5041923577559495, 0.24704137139878857, 0.12228643724985955,
          ],
          frame_index: 4370,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved carrot piece last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 429.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:07:09.0 video 1>",
          projected_pixel: [185.5399186380107, 855.6191096175138],
          normalized_projected_pixel: [0.1317755103963144, 0.6076840267169842],
          camera_coordinates: [
            -0.3843662017045384, 0.10895120713669942, 0.41644114802479026,
          ],
          frame_index: 4370,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved carrot piece stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 145.66666666666666,
          last_placement_time_in_clip_sec: -281.33333333333337,
          last_placement_time_token: "<TIME 00:02:25.7 video 1>",
          projected_pixel: [923.8953100923059, 1056.0664264266118],
          normalized_projected_pixel: [0.6561756463723764, 0.7500471778598095],
          camera_coordinates: [
            0.10389449390734984, 0.1611518170809152, 0.27244176725214286,
          ],
          frame_index: 4370,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:07:15.0 video 1>, based on the last known position of the carrot piece that was moved earlier,which fixture is closest to it?",
        choices: ["counter", "hob", "fridgefreezer", "shelf", "sink"],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 429.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.007",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:07:15.0 video 1>, the carrot piece that was moved earlier is not visible. Based on its last known position, in which direction is the carrot piece from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-left", "Front-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 435.0,
            camera_coordinates: [
              -0.5041923577559495, 0.24704137139878857, 0.12228643724985955,
            ],
            world_coordinates: [
              -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.5041923577559495,
              z: 0.12228643724985955,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:07:15.0 video 1>, the carrot piece that was moved earlier is not visible. Based on the last known position of the carrot piece and the position of the marked pen in the current frame, where is the carrot piece relative to pen from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "3ca360d7506fd255",
            object_x_name: "carrot piece",
            object_x_reference_time_sec: 435.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
            ],
            object_x_camera_coordinates: [
              -0.5041923577559495, 0.24704137139878857, 0.12228643724985955,
            ],
            object_y_assoc_id: "4834a5a5778ef81c",
            object_y_name: "pen",
            object_y_reference_time_sec: 435.0,
            object_y_world_coordinates: [
              -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
            ],
            object_y_projected_pixel: [898.9350946708885, 761.4278167975951],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.6384482206469378, 0.5407868017028374,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:07:15.0 video 1>, the carrot piece that was moved earlier is not visible. Based on the last known position of the carrot piece, and the position of the marked pen in the current frame, how far is the carrot piece from thepen?",
          choices: ["close", "very close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "3ca360d7506fd255",
            object_x_name: "carrot piece",
            object_x_reference_time_sec: 435.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "4834a5a5778ef81c",
            object_y_name: "pen",
            object_y_pixel: [898.9350946708885, 761.4278167975951],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.8471239884496446, 0.15705101853618952, -0.9285764406737352,
            ],
            distance_m: 1.266703706635609,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.6384482206469378, 0.5407868017028374,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_23: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "23a815929202d3f4",
    object_a_name: "chopping board",
    query_time_sec: 446.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 438.0,
    clip_end_time_sec: 446.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "23a815929202d3f4",
      object_name: "chopping board",
      query_time_sec: 446.0,
      oos_span_start_sec: 441.0,
      oos_span_end_sec: 1125.0,
      oos_duration_sec: 684.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_dishwasher.001",
      relocation_score: 0,
      clip_start_time_sec: 438.0,
      clip_end_time_sec: 446.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "4834a5a5778ef81c",
      anchor_name: "pen",
      anchor_projected_pixel: [1172.9169818819023, 1144.6910557483438],
      anchor_world_coordinates: [
        -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_23",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:07:26.0 video 1>, is the previously moved chopping board visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-27898.125383380302, 109453.18929552073],
          camera_coordinates: [
            -0.7638903688346521, 1.1761362676746328, 0.10240073767420865,
          ],
          frame_index: 13026,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved chopping board last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 440.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:07:20.0 video 1>",
          projected_pixel: [1178.9709779282705, 1032.5005568962506],
          normalized_projected_pixel: [0.8373373422786012, 0.7333100546138144],
          camera_coordinates: [
            0.3828834022902202, 0.2584172748874156, 0.4345180686138364,
          ],
          frame_index: 13026,
          status: "observed_visible_in_open_fixture",
          fixture: "P01_dishwasher.001",
          world_coordinates: [
            -0.5608742030226073, -3.0084274197388936, -1.1146101431118212,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved chopping board stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 434.2,
          last_placement_time_in_clip_sec: -3.8000000000000114,
          last_placement_time_token: "<TIME 00:07:14.2 video 1>",
          projected_pixel: [924.7548068503888, 1061.5288263235923],
          normalized_projected_pixel: [0.6567860844107876, 0.7539267232411877],
          camera_coordinates: [
            0.20059400189517373, 0.3148407314369832, 0.5231343922727388,
          ],
          frame_index: 13026,
          status: "last_past_track_end",
          fixture: "P01_dishwasher.001",
          world_coordinates: [
            -0.5608742030226073, -3.0084274197388936, -1.1146101431118212,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:07:26.0 video 1>, based on the last known position of the chopping board that was moved earlier,which fixture is closest to it?",
        choices: ["dishwasher", "cupboard", "bin", "microwave", "shelf"],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 440.0,
          correct_fixture: "dishwasher",
          raw_correct_fixture: "P01_dishwasher.001",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:07:26.0 video 1>, the chopping board that was moved earlier is not visible. Based on its last known position, in which direction is the chopping board from your viewpoint?",
          choices: ["Front-left", "Back-left", "Front-right", "Back-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 446.0,
            camera_coordinates: [
              -0.7638903688346521, 1.1761362676746328, 0.10240073767420865,
            ],
            world_coordinates: [
              -0.5608742030226073, -3.0084274197388936, -1.1146101431118212,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.7638903688346521,
              z: 0.10240073767420865,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:07:26.0 video 1>, the chopping board that was moved earlier is not visible. Based on the last known position of the chopping board and the position of the marked pen in the current frame, where is the chopping board relative to pen from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "23a815929202d3f4",
            object_x_name: "chopping board",
            object_x_reference_time_sec: 446.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.5608742030226073, -3.0084274197388936, -1.1146101431118212,
            ],
            object_x_camera_coordinates: [
              -0.7638903688346521, 1.1761362676746328, 0.10240073767420865,
            ],
            object_y_assoc_id: "4834a5a5778ef81c",
            object_y_name: "pen",
            object_y_reference_time_sec: 446.0,
            object_y_world_coordinates: [
              -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
            ],
            object_y_projected_pixel: [1172.9169818819023, 1144.6910557483438],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.8330376291774875, 0.8129908066394488,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:07:26.0 video 1>, the chopping board that was moved earlier is not visible. Based on the last known position of the chopping board, and the position of the marked pen in the current frame, how far is the chopping board from thepen?",
          choices: ["very close", "far", "medium", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "23a815929202d3f4",
            object_x_name: "chopping board",
            object_x_reference_time_sec: 446.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "4834a5a5778ef81c",
            object_y_name: "pen",
            object_y_pixel: [1172.9169818819023, 1144.6910557483438],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.170688229679312, 0.8014463113631782, -0.3413225899766783,
            ],
            distance_m: 1.4592217897001516,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.8330376291774875, 0.8129908066394488,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_24: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "4834a5a5778ef81c",
    object_a_name: "pen",
    query_time_sec: 454.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 446.0,
    clip_end_time_sec: 454.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "4834a5a5778ef81c",
      object_name: "pen",
      query_time_sec: 454.0,
      oos_span_start_sec: 449.0,
      oos_span_end_sec: 527.0,
      oos_duration_sec: 78.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.009",
      relocation_score: 0,
      clip_start_time_sec: 446.0,
      clip_end_time_sec: 454.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "9df836d37764b630",
      anchor_name: "tupperware",
      anchor_projected_pixel: [413.68646392188344, 928.868452001544],
      anchor_world_coordinates: [
        -0.4358742692297094, -3.8047511356191013, -0.5556573583242533,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_24",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:07:34.0 video 1>, is the previously moved pen visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.09411563147354274, 1.5702187803759955, -0.9790024594865583,
          ],
          frame_index: 2503,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved pen last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 448.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:07:28.0 video 1>",
          projected_pixel: [1259.261583021927, 1042.9663796068812],
          normalized_projected_pixel: [0.8943619197598913, 0.7407431673344327],
          camera_coordinates: [
            0.45301410782372264, 0.2702088824487294, 0.4137417269005055,
          ],
          frame_index: 2503,
          status: "in_view",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved pen stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 83.43333333333334,
          last_placement_time_in_clip_sec: -362.56666666666666,
          last_placement_time_token: "<TIME 00:01:23.4 video 1>",
          projected_pixel: [980.0791322432808, 1155.3748954852601],
          normalized_projected_pixel: [0.6960789291500574, 0.820578760998054],
          camera_coordinates: [
            0.21431793397450116, 0.3418479305437464, 0.428872909662251,
          ],
          frame_index: 2503,
          status: "last_past_track_end",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:07:34.0 video 1>, based on the last known position of the pen that was moved earlier,which fixture is closest to it?",
        choices: ["counter", "sink", "cupboard", "oven", "drawer"],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 448.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.009",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:07:34.0 video 1>, the pen that was moved earlier is not visible. Based on its last known position, in which direction is the pen from your viewpoint?",
          choices: ["Back-left", "Front-left", "Front-right", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 454.0,
            camera_coordinates: [
              0.09411563147354274, 1.5702187803759955, -0.9790024594865583,
            ],
            world_coordinates: [
              -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.09411563147354274,
              z: -0.9790024594865583,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:07:34.0 video 1>, the pen that was moved earlier is not visible. Based on the last known position of the pen and the position of the marked tupperware in the current frame, where is the pen relative to tupperware from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "4834a5a5778ef81c",
            object_x_name: "pen",
            object_x_reference_time_sec: 454.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5763250611925403, -2.100410224158189, -0.5914538006028035,
            ],
            object_x_camera_coordinates: [
              0.09411563147354274, 1.5702187803759955, -0.9790024594865583,
            ],
            object_y_assoc_id: "9df836d37764b630",
            object_y_name: "tupperware",
            object_y_reference_time_sec: 454.0,
            object_y_world_coordinates: [
              -0.4358742692297094, -3.8047511356191013, -0.5556573583242533,
            ],
            object_y_projected_pixel: [413.68646392188344, 928.868452001544],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.2938114090354286, 0.6597077073874602,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:07:34.0 video 1>, the pen that was moved earlier is not visible. Based on the last known position of the pen, and the position of the marked tupperware in the current frame, how far is the pen from thetupperware?",
          choices: ["far", "very close", "medium", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "4834a5a5778ef81c",
            object_x_name: "pen",
            object_x_reference_time_sec: 454.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "9df836d37764b630",
            object_y_name: "tupperware",
            object_y_pixel: [413.68646392188344, 928.868452001544],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.3316631850419043, 1.3883321317852877, -1.4728274712905922,
            ],
            distance_m: 2.0510210473439474,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.2938114090354286, 0.6597077073874602,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_25: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "51668af48d1a7842",
    object_a_name: "bag of flour",
    query_time_sec: 455.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 447.0,
    clip_end_time_sec: 455.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "51668af48d1a7842",
      object_name: "bag of flour",
      query_time_sec: 455.0,
      oos_span_start_sec: 450.0,
      oos_span_end_sec: 500.0,
      oos_duration_sec: 50.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 447.0,
      clip_end_time_sec: 455.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "9df836d37764b630",
      anchor_name: "tupperware",
      anchor_projected_pixel: [400.55501103982573, 952.8203519046347],
      anchor_world_coordinates: [
        -0.4358742692297094, -3.8047511356191013, -0.5556573583242533,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_25",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:07:35.0 video 1>, is the previously moved bag of flour visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.4930976481788023, 0.7887659408582275, -0.39104257432740086,
          ],
          frame_index: 6313,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved bag of flour last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 449.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:07:29.0 video 1>",
          projected_pixel: [1063.446156471477, 1030.650621883573],
          normalized_projected_pixel: [0.7552884634030377, 0.7319961803150377],
          camera_coordinates: [
            0.2903400512439037, 0.25690535807004067, 0.4559436832294792,
          ],
          frame_index: 6313,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5361807101323421, -3.13597718783123, -0.4082206440398749,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved bag of flour stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 210.43333333333334,
          last_placement_time_in_clip_sec: -236.56666666666666,
          last_placement_time_token: "<TIME 00:03:30.4 video 1>",
          projected_pixel: [916.7160544861033, 1058.0573582464567],
          normalized_projected_pixel: [0.651076743242971, 0.7514611919364039],
          camera_coordinates: [
            0.1535411332968899, 0.247475619869006, 0.41629383668745445,
          ],
          frame_index: 6313,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5361807101323421, -3.13597718783123, -0.4082206440398749,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:07:35.0 video 1>, based on the last known position of the bag of flour that was moved earlier,which fixture is closest to it?",
        choices: ["microwave", "drawer", "counter", "dishwasher", "sink"],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 449.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.007",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:07:35.0 video 1>, the bag of flour that was moved earlier is not visible. Based on its last known position, in which direction is the bag of flour from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-right", "Front-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 455.0,
            camera_coordinates: [
              0.4930976481788023, 0.7887659408582275, -0.39104257432740086,
            ],
            world_coordinates: [
              -1.5361807101323421, -3.13597718783123, -0.4082206440398749,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.4930976481788023,
              z: -0.39104257432740086,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:07:35.0 video 1>, the bag of flour that was moved earlier is not visible. Based on the last known position of the bag of flour and the position of the marked tupperware in the current frame, where is the bag of flour relative to tupperware from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "51668af48d1a7842",
            object_x_name: "bag of flour",
            object_x_reference_time_sec: 455.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5361807101323421, -3.13597718783123, -0.4082206440398749,
            ],
            object_x_camera_coordinates: [
              0.4930976481788023, 0.7887659408582275, -0.39104257432740086,
            ],
            object_y_assoc_id: "9df836d37764b630",
            object_y_name: "tupperware",
            object_y_reference_time_sec: 455.0,
            object_y_world_coordinates: [
              -0.4358742692297094, -3.8047511356191013, -0.5556573583242533,
            ],
            object_y_projected_pixel: [400.55501103982573, 952.8203519046347],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.284485093068058, 0.6767189999322689,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:07:35.0 video 1>, the bag of flour that was moved earlier is not visible. Based on the last known position of the bag of flour, and the position of the marked tupperware in the current frame, how far is the bag of flour from thetupperware?",
          choices: ["very close", "close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "51668af48d1a7842",
            object_x_name: "bag of flour",
            object_x_reference_time_sec: 455.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "9df836d37764b630",
            object_y_name: "tupperware",
            object_y_pixel: [400.55501103982573, 952.8203519046347],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.7435864330889963, 0.585402320083257, -0.8854681146250782,
            ],
            distance_m: 1.2960210036301754,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.284485093068058, 0.6767189999322689,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_26: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "3ca360d7506fd255",
    object_a_name: "carrot piece",
    query_time_sec: 456.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 448.0,
    clip_end_time_sec: 456.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "3ca360d7506fd255",
      object_name: "carrot piece",
      query_time_sec: 456.0,
      oos_span_start_sec: 451.0,
      oos_span_end_sec: 499.0,
      oos_duration_sec: 48.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 448.0,
      clip_end_time_sec: 456.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "9df836d37764b630",
      anchor_name: "tupperware",
      anchor_projected_pixel: [576.4703345038911, 861.3538912919744],
      anchor_world_coordinates: [
        -0.4358742692297094, -3.8047511356191013, -0.5556573583242533,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_26",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:07:36.0 video 1>, is the previously moved carrot piece visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.368692233251958, 0.6213296856265913, -0.3829892555965384,
          ],
          frame_index: 4370,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved carrot piece last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 450.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:07:30.0 video 1>",
          projected_pixel: [997.0124439360258, 1089.1893077902437],
          normalized_projected_pixel: [0.7081054289318365, 0.7735719515555708],
          camera_coordinates: [
            0.13862368491346577, 0.17751532009310167, 0.26687423924262577,
          ],
          frame_index: 4370,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved carrot piece stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 145.66666666666666,
          last_placement_time_in_clip_sec: -302.33333333333337,
          last_placement_time_token: "<TIME 00:02:25.7 video 1>",
          projected_pixel: [923.8953100923059, 1056.0664264266118],
          normalized_projected_pixel: [0.6561756463723764, 0.7500471778598095],
          camera_coordinates: [
            0.10389449390734984, 0.1611518170809152, 0.27244176725214286,
          ],
          frame_index: 4370,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:07:36.0 video 1>, based on the last known position of the carrot piece that was moved earlier,which fixture is closest to it?",
        choices: ["shelf", "sink", "counter", "microwave", "oven"],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 450.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.007",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:07:36.0 video 1>, the carrot piece that was moved earlier is not visible. Based on its last known position, in which direction is the carrot piece from your viewpoint?",
          choices: ["Back-left", "Front-left", "Front-right", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 456.0,
            camera_coordinates: [
              0.368692233251958, 0.6213296856265913, -0.3829892555965384,
            ],
            world_coordinates: [
              -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.368692233251958,
              z: -0.3829892555965384,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:07:36.0 video 1>, the carrot piece that was moved earlier is not visible. Based on the last known position of the carrot piece and the position of the marked tupperware in the current frame, where is the carrot piece relative to tupperware from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "3ca360d7506fd255",
            object_x_name: "carrot piece",
            object_x_reference_time_sec: 456.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
            ],
            object_x_camera_coordinates: [
              0.368692233251958, 0.6213296856265913, -0.3829892555965384,
            ],
            object_y_assoc_id: "9df836d37764b630",
            object_y_name: "tupperware",
            object_y_reference_time_sec: 456.0,
            object_y_world_coordinates: [
              -0.4358742692297094, -3.8047511356191013, -0.5556573583242533,
            ],
            object_y_projected_pixel: [576.4703345038911, 861.3538912919744],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.40942495348287716, 0.6117570250653227,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:07:36.0 video 1>, the carrot piece that was moved earlier is not visible. Based on the last known position of the carrot piece, and the position of the marked tupperware in the current frame, how far is the carrot piece from thetupperware?",
          choices: ["very close", "close", "far", "medium"],
          correct_idx: 3,
          answer_metadata: {
            object_x_assoc_id: "3ca360d7506fd255",
            object_x_name: "carrot piece",
            object_x_reference_time_sec: 456.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "9df836d37764b630",
            object_y_name: "tupperware",
            object_y_pixel: [576.4703345038911, 861.3538912919744],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.48292874006654385, 0.48089078464650226, -0.9462094349915324,
            ],
            distance_m: 1.1660996568077633,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.40942495348287716, 0.6117570250653227,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_27: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "039f7e7efd96f484",
    object_a_name: "spatula",
    query_time_sec: 465.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 457.0,
    clip_end_time_sec: 465.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "039f7e7efd96f484",
      object_name: "spatula",
      query_time_sec: 465.0,
      oos_span_start_sec: 460.0,
      oos_span_end_sec: 533.0,
      oos_duration_sec: 73.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.002",
      relocation_score: 0,
      clip_start_time_sec: 457.0,
      clip_end_time_sec: 465.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "9df836d37764b630",
      anchor_name: "tupperware",
      anchor_projected_pixel: [534.2794825093663, 864.4072423989955],
      anchor_world_coordinates: [
        -0.4358742692297094, -3.8047511356191013, -0.5556573583242533,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_27",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:07:45.0 video 1>, is the previously moved spatula visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.8495622695129941, 0.7106766820922944, -0.1907360775192697,
          ],
          frame_index: 5005,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved spatula last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 459.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:07:39.0 video 1>",
          projected_pixel: [1372.5412120298668, 722.452746150431],
          normalized_projected_pixel: [0.9748162017257577, 0.5131056435727493],
          camera_coordinates: [
            0.32143953369024536, 0.0059805975919227095, 0.23728425381855556,
          ],
          frame_index: 5005,
          status: "in_view",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3996929235133511, -2.6314488801133136, -0.5524938701650501,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved spatula stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 166.83333333333334,
          last_placement_time_in_clip_sec: -290.16666666666663,
          last_placement_time_token: "<TIME 00:02:46.8 video 1>",
          projected_pixel: [1163.0361082101085, 1138.1635864796554],
          normalized_projected_pixel: [0.8260199632174067, 0.808354819942937],
          camera_coordinates: [
            0.36305404673523833, 0.33642767237080734, 0.40914144326217494,
          ],
          frame_index: 5005,
          status: "last_past_track_end",
          fixture: "P01_counter.002",
          world_coordinates: [
            -0.3996929235133511, -2.6314488801133136, -0.5524938701650501,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:07:45.0 video 1>, based on the last known position of the spatula that was moved earlier,which fixture is closest to it?",
        choices: ["sink", "counter", "cupboard", "dishwasher", "shelf"],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 459.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.002",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:07:45.0 video 1>, the spatula that was moved earlier is not visible. Based on its last known position, in which direction is the spatula from your viewpoint?",
          choices: ["Back-left", "Back-right", "Front-left", "Front-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 465.0,
            camera_coordinates: [
              -0.8495622695129941, 0.7106766820922944, -0.1907360775192697,
            ],
            world_coordinates: [
              -0.3996929235133511, -2.6314488801133136, -0.5524938701650501,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.8495622695129941,
              z: -0.1907360775192697,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:07:45.0 video 1>, the spatula that was moved earlier is not visible. Based on the last known position of the spatula and the position of the marked tupperware in the current frame, where is the spatula relative to tupperware from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "039f7e7efd96f484",
            object_x_name: "spatula",
            object_x_reference_time_sec: 465.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3996929235133511, -2.6314488801133136, -0.5524938701650501,
            ],
            object_x_camera_coordinates: [
              -0.8495622695129941, 0.7106766820922944, -0.1907360775192697,
            ],
            object_y_assoc_id: "9df836d37764b630",
            object_y_name: "tupperware",
            object_y_reference_time_sec: 465.0,
            object_y_world_coordinates: [
              -0.4358742692297094, -3.8047511356191013, -0.5556573583242533,
            ],
            object_y_projected_pixel: [534.2794825093663, 864.4072423989955],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.3794598597367658, 0.6139255982947411,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:07:45.0 video 1>, the spatula that was moved earlier is not visible. Based on the last known position of the spatula, and the position of the marked tupperware in the current frame, how far is the spatula from thetupperware?",
          choices: ["very close", "medium", "close", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "039f7e7efd96f484",
            object_x_name: "spatula",
            object_x_reference_time_sec: 465.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "9df836d37764b630",
            object_y_name: "tupperware",
            object_y_pixel: [534.2794825093663, 864.4072423989955],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.6950523063597267, 0.5662241663917761, -0.7577926926462883,
            ],
            distance_m: 1.1738642511850121,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.3794598597367658, 0.6139255982947411,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_28: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "7b4238cb675c8cc9",
    object_a_name: "kettle",
    query_time_sec: 472.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 464.0,
    clip_end_time_sec: 472.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "7b4238cb675c8cc9",
      object_name: "kettle",
      query_time_sec: 472.0,
      oos_span_start_sec: 467.0,
      oos_span_end_sec: 479.0,
      oos_duration_sec: 12.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.003",
      relocation_score: 0,
      clip_start_time_sec: 464.0,
      clip_end_time_sec: 472.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "9df836d37764b630",
      anchor_name: "tupperware",
      anchor_projected_pixel: [654.1525250130915, 675.5877106385158],
      anchor_world_coordinates: [
        -0.4358742692297094, -3.8047511356191013, -0.5556573583242533,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_28",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:07:52.0 video 1>, is the previously moved kettle visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-31.117216441097867, 670.2815649252316],
          camera_coordinates: [
            -0.49258334918983504, -0.026826797669232905, 0.2957620689971143,
          ],
          frame_index: 1184,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved kettle last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 466.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:07:46.0 video 1>",
          projected_pixel: [494.51552464087047, 810.9864211952068],
          normalized_projected_pixel: [0.35121841238698187, 0.5759846741443231],
          camera_coordinates: [
            -0.2271364480575091, 0.11230601080452352, 0.6723691892631865,
          ],
          frame_index: 1184,
          status: "in_view",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.14313805794458712, -3.437758360301628, -0.4603667141428952,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved kettle stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 39.46666666666667,
          last_placement_time_in_clip_sec: -424.5333333333333,
          last_placement_time_token: "<TIME 00:00:39.5 video 1>",
          projected_pixel: [1227.3203241804836, 1128.4446498905281],
          normalized_projected_pixel: [0.8716763666054571, 0.8014521661154319],
          camera_coordinates: [
            0.3911065755843901, 0.31091558976300093, 0.36855201176318797,
          ],
          frame_index: 1184,
          status: "last_past_track_end",
          fixture: "P01_counter.003",
          world_coordinates: [
            -0.14313805794458712, -3.437758360301628, -0.4603667141428952,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:07:52.0 video 1>, based on the last known position of the kettle that was moved earlier,which fixture is closest to it?",
        choices: ["microwave", "bin", "drawer", "counter", "shelf"],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 466.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.003",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:07:52.0 video 1>, the kettle that was moved earlier is not visible. Based on its last known position, in which direction is the kettle from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 472.0,
            camera_coordinates: [
              -0.49258334918983504, -0.026826797669232905, 0.2957620689971143,
            ],
            world_coordinates: [
              -0.14313805794458712, -3.437758360301628, -0.4603667141428952,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.49258334918983504,
              z: 0.2957620689971143,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:07:52.0 video 1>, the kettle that was moved earlier is not visible. Based on the last known position of the kettle and the position of the marked tupperware in the current frame, where is the kettle relative to tupperware from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "7b4238cb675c8cc9",
            object_x_name: "kettle",
            object_x_reference_time_sec: 472.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.14313805794458712, -3.437758360301628, -0.4603667141428952,
            ],
            object_x_camera_coordinates: [
              -0.49258334918983504, -0.026826797669232905, 0.2957620689971143,
            ],
            object_y_assoc_id: "9df836d37764b630",
            object_y_name: "tupperware",
            object_y_reference_time_sec: 472.0,
            object_y_world_coordinates: [
              -0.4358742692297094, -3.8047511356191013, -0.5556573583242533,
            ],
            object_y_projected_pixel: [654.1525250130915, 675.5877106385158],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.464596963787707, 0.479820817214855,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:07:52.0 video 1>, the kettle that was moved earlier is not visible. Based on the last known position of the kettle, and the position of the marked tupperware in the current frame, how far is the kettle from thetupperware?",
          choices: ["very close", "far", "close", "medium"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "7b4238cb675c8cc9",
            object_x_name: "kettle",
            object_x_reference_time_sec: 472.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "9df836d37764b630",
            object_y_name: "tupperware",
            object_y_pixel: [654.1525250130915, 675.5877106385158],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.46028108886246466, -0.0031788610856287036,
              -0.13262619454342217,
            ],
            distance_m: 0.4790182599873281,
            distance_bucket: "very close",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.464596963787707, 0.479820817214855,
            ],
          },
        },
      ],
    },
  },
  oos_staged_h5p0_29: {
    inputs: {
      "video 1": {
        id: "P01-20240203-132119",
      },
    },
    video_id: "P01-20240203-132119",
    object_a_assoc_id: "3ca360d7506fd255",
    object_a_name: "carrot piece",
    query_time_sec: 508.0,
    query_time_in_clip_sec: 8.0,
    clip_start_time_sec: 500.0,
    clip_end_time_sec: 508.0,
    clip_duration_sec: 8.0,
    horizon_sec: 5.0,
    generation_info: {
      video_id: "P01-20240203-132119",
      assoc_id: "3ca360d7506fd255",
      object_name: "carrot piece",
      query_time_sec: 508.0,
      oos_span_start_sec: 503.0,
      oos_span_end_sec: 522.0,
      oos_duration_sec: 19.0,
      horizon_sec: 5.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 500.0,
      clip_end_time_sec: 508.0,
      clip_duration_sec: 8.0,
      anchor_assoc_id: "9df836d37764b630",
      anchor_name: "tupperware",
      anchor_projected_pixel: [651.837234810129, 672.0373776400841],
      anchor_world_coordinates: [
        -0.4358742692297094, -3.8047511356191013, -0.5556573583242533,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h5p0_29",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:08:28.0 video 1>, is the previously moved carrot piece visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.411499736618647, 0.7008175258006442, -0.2654275223709832,
          ],
          frame_index: 4370,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved carrot piece last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 502.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:08:22.0 video 1>",
          projected_pixel: [1017.4311170849779, 1076.051354750668],
          normalized_projected_pixel: [0.7226073274751263, 0.764241018999054],
          camera_coordinates: [
            0.150831966024628, 0.1744511413801607, 0.27132216862242897,
          ],
          frame_index: 4370,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved carrot piece stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 145.66666666666666,
          last_placement_time_in_clip_sec: -354.33333333333337,
          last_placement_time_token: "<TIME 00:02:25.7 video 1>",
          projected_pixel: [923.8953100923059, 1056.0664264266118],
          normalized_projected_pixel: [0.6561756463723764, 0.7500471778598095],
          camera_coordinates: [
            0.10389449390734984, 0.1611518170809152, 0.27244176725214286,
          ],
          frame_index: 4370,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
          ],
          reference_source:
            "raw_assoc_info_mask_info_latest_mask_of_last_past_track",
          note: "Uses exact past-track end position when last_placement_source=raw_tracks, or a sampled approximation from merged tracks when last_placement_source=merged_tracks.",
        },
      },
      {
        step: 4,
        question_class: "oos_step4_fixture",
        question:
          "At the current time <TIME 00:08:28.0 video 1>, based on the last known position of the carrot piece that was moved earlier,which fixture is closest to it?",
        choices: ["shelf", "drawer", "oven", "counter", "fridgefreezer"],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 502.0,
          correct_fixture: "counter",
          raw_correct_fixture: "P01_counter.007",
          reference_source: "precomputed_visibility_track",
        },
      },
    ],
    branch_groups: {
      post_step3: [
        {
          step: "5a",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_camera_relative_position",
          question:
            "At the current time <TIME 00:08:28.0 video 1>, the carrot piece that was moved earlier is not visible. Based on its last known position, in which direction is the carrot piece from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 508.0,
            camera_coordinates: [
              0.411499736618647, 0.7008175258006442, -0.2654275223709832,
            ],
            world_coordinates: [
              -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.411499736618647,
              z: -0.2654275223709832,
            },
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
          skipped: false,
        },
        {
          step: "5b",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_relation",
          question:
            "At the current time <TIME 00:08:28.0 video 1>, the carrot piece that was moved earlier is not visible. Based on the last known position of the carrot piece and the position of the marked tupperware in the current frame, where is the carrot piece relative to tupperware from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "3ca360d7506fd255",
            object_x_name: "carrot piece",
            object_x_reference_time_sec: 508.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4592226784624007, -3.321314390154627, -0.27488101305489004,
            ],
            object_x_camera_coordinates: [
              0.411499736618647, 0.7008175258006442, -0.2654275223709832,
            ],
            object_y_assoc_id: "9df836d37764b630",
            object_y_name: "tupperware",
            object_y_reference_time_sec: 508.0,
            object_y_world_coordinates: [
              -0.4358742692297094, -3.8047511356191013, -0.5556573583242533,
            ],
            object_y_projected_pixel: [651.837234810129, 672.0373776400841],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
            object_y_normalized_projected_pixel: [
              0.46295258154128477, 0.47729927389210514,
            ],
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:08:28.0 video 1>, the carrot piece that was moved earlier is not visible. Based on the last known position of the carrot piece, and the position of the marked tupperware in the current frame, how far is the carrot piece from thetupperware?",
          choices: ["close", "medium", "very close", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "3ca360d7506fd255",
            object_x_name: "carrot piece",
            object_x_reference_time_sec: 508.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "9df836d37764b630",
            object_y_name: "tupperware",
            object_y_pixel: [651.837234810129, 672.0373776400841],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.4527444697034899, 0.7325969833071837, -0.7862013195163837,
            ],
            distance_m: 1.1660996568077633,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
            object_y_normalized_projected_pixel: [
              0.46295258154128477, 0.47729927389210514,
            ],
          },
        },
      ],
    },
  },
};

export const VIDEO: VideoEntry = {
  id: "P01-20240203-132119",
  label: "P01-20240203-132119",
  sampledUrl: "https://www.youtube.com/watch?v=J6F6VP6-qZw",
  fullUrl: "https://www.youtube.com/watch?v=dX1WtAax4zY",
  duration: 220,
  trajectory: TRAJECTORY,
  rawJson: { TRAJECTORY },
};

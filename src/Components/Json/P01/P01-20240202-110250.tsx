import type { TrajectoryData, VideoEntry } from "../Types";

const TRAJECTORY: Record<string, TrajectoryData> = {
  oos_staged_h30p0_0: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "e44a21e6e04d424c",
    object_a_name: "mug",
    query_time_sec: 94.0,
    query_time_in_clip_sec: 33.0,
    clip_start_time_sec: 61.0,
    clip_end_time_sec: 94.0,
    clip_duration_sec: 33.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "e44a21e6e04d424c",
      object_name: "mug",
      query_time_sec: 94.0,
      oos_span_start_sec: 64.0,
      oos_span_end_sec: 134.0,
      oos_duration_sec: 70.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 1,
      clip_start_time_sec: 61.0,
      clip_end_time_sec: 94.0,
      clip_duration_sec: 33.0,
      anchor_assoc_id: "762824ba9d53a1cc",
      anchor_name: "plug of food processor",
      anchor_projected_pixel: [372.52356859415124, 741.870487730254],
      anchor_world_coordinates: [
        -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_0",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:01:34.0 video 1>, is the previously moved mug visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.1817273935713672, 1.0280493682432732, -0.7794807295603479,
          ],
          frame_index: 438,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved mug last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 63.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:01:03.0 video 1>",
          projected_pixel: [141.5969461227653, 1110.5545625726443],
          normalized_projected_pixel: [0.10056601287128218, 0.7887461381907985],
          camera_coordinates: [
            -0.3889401942970878, 0.2828587173126526, 0.34018504481310263,
          ],
          frame_index: 438,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.40843634852800165, -1.5471114051980022, -0.4866355351647842,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved mug stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 14.6,
          last_placement_time_in_clip_sec: -46.4,
          last_placement_time_token: "<TIME 00:00:14.6 video 1>",
          projected_pixel: [835.2471918640017, 1169.1856131591371],
          normalized_projected_pixel: [0.593215335130683, 0.830387509345978],
          camera_coordinates: [
            0.08903745949307518, 0.3012078094246631, 0.37329474019916986,
          ],
          frame_index: 438,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.40843634852800165, -1.5471114051980022, -0.4866355351647842,
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
          "At the current time <TIME 00:01:34.0 video 1>, based on the last known position of the mug that was moved earlier,which fixture is closest to it?",
        choices: ["drawer", "counter", "shelf", "cupboard", "bin"],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 63.0,
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
            "At the current time <TIME 00:01:34.0 video 1>, the mug that was moved earlier is not visible. Based on its last known position, in which direction is the mug from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 94.0,
            camera_coordinates: [
              1.1817273935713672, 1.0280493682432732, -0.7794807295603479,
            ],
            world_coordinates: [
              -0.40843634852800165, -1.5471114051980022, -0.4866355351647842,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.1817273935713672,
              z: -0.7794807295603479,
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
            "At the current time <TIME 00:01:34.0 video 1>, the mug that was moved earlier is not visible. Based on the last known position of the mug and the position of the marked plug of food processor in the current frame, where is the mug relative to plug of food processor from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "e44a21e6e04d424c",
            object_x_name: "mug",
            object_x_reference_time_sec: 94.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.40843634852800165, -1.5471114051980022, -0.4866355351647842,
            ],
            object_x_camera_coordinates: [
              1.1817273935713672, 1.0280493682432732, -0.7794807295603479,
            ],
            object_y_assoc_id: "762824ba9d53a1cc",
            object_y_name: "plug of food processor",
            object_y_reference_time_sec: 94.0,
            object_y_world_coordinates: [
              -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
            ],
            object_y_projected_pixel: [372.52356859415124, 741.870487730254],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:01:34.0 video 1>, the mug that was moved earlier is not visible. Based on the last known position of the mug, and the position of the marked plug of food processor in the current frame, how far is the mug from theplug of food processor?",
          choices: ["close", "medium", "far", "very close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "e44a21e6e04d424c",
            object_x_name: "mug",
            object_x_reference_time_sec: 94.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "762824ba9d53a1cc",
            object_y_name: "plug of food processor",
            object_y_pixel: [372.52356859415124, 741.870487730254],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.4453528113693206, 0.9992670287925727, -1.266539672514988,
            ],
            distance_m: 2.1660337223181703,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h30p0_1: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "cc058509b79d0313",
    object_a_name: "milk frother base",
    query_time_sec: 94.0,
    query_time_in_clip_sec: 33.0,
    clip_start_time_sec: 61.0,
    clip_end_time_sec: 94.0,
    clip_duration_sec: 33.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "cc058509b79d0313",
      object_name: "milk frother base",
      query_time_sec: 94.0,
      oos_span_start_sec: 64.0,
      oos_span_end_sec: 134.0,
      oos_duration_sec: 70.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 61.0,
      clip_end_time_sec: 94.0,
      clip_duration_sec: 33.0,
      anchor_assoc_id: "762824ba9d53a1cc",
      anchor_name: "plug of food processor",
      anchor_projected_pixel: [372.52356859415124, 741.870487730254],
      anchor_world_coordinates: [
        -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_1",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:01:34.0 video 1>, is the previously moved milk frother base visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.9910536828638699, 1.003880552973765, -0.8266182921586843,
          ],
          frame_index: 762,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved milk frother base last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 63.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:01:03.0 video 1>",
          projected_pixel: [344.0336876429373, 930.1607394780232],
          normalized_projected_pixel: [0.2443421077009498, 0.6606255251974597],
          camera_coordinates: [
            -0.2885176938663785, 0.182312051387197, 0.4779102595442083,
          ],
          frame_index: 762,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.3451748985144969, -1.7320702253205686, -0.4558009896797768,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved milk frother base stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 25.4,
          last_placement_time_in_clip_sec: -35.6,
          last_placement_time_token: "<TIME 00:00:25.4 video 1>",
          projected_pixel: [756.2832572010228, 1067.0417798849949],
          normalized_projected_pixel: [0.537132995171181, 0.7578421732137748],
          camera_coordinates: [
            0.039321944400785735, 0.2457348924991356, 0.40711260563206253,
          ],
          frame_index: 762,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.3451748985144969, -1.7320702253205686, -0.4558009896797768,
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
          "At the current time <TIME 00:01:34.0 video 1>, based on the last known position of the milk frother base that was moved earlier,which fixture is closest to it?",
        choices: ["counter", "sink", "oven", "fridgefreezer", "bin"],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 63.0,
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
            "At the current time <TIME 00:01:34.0 video 1>, the milk frother base that was moved earlier is not visible. Based on its last known position, in which direction is the milk frother base from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 94.0,
            camera_coordinates: [
              0.9910536828638699, 1.003880552973765, -0.8266182921586843,
            ],
            world_coordinates: [
              -0.3451748985144969, -1.7320702253205686, -0.4558009896797768,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.9910536828638699,
              z: -0.8266182921586843,
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
            "At the current time <TIME 00:01:34.0 video 1>, the milk frother base that was moved earlier is not visible. Based on the last known position of the milk frother base and the position of the marked plug of food processor in the current frame, where is the milk frother base relative to plug of food processor from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "cc058509b79d0313",
            object_x_name: "milk frother base",
            object_x_reference_time_sec: 94.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3451748985144969, -1.7320702253205686, -0.4558009896797768,
            ],
            object_x_camera_coordinates: [
              0.9910536828638699, 1.003880552973765, -0.8266182921586843,
            ],
            object_y_assoc_id: "762824ba9d53a1cc",
            object_y_name: "plug of food processor",
            object_y_reference_time_sec: 94.0,
            object_y_world_coordinates: [
              -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
            ],
            object_y_projected_pixel: [372.52356859415124, 741.870487730254],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:01:34.0 video 1>, the milk frother base that was moved earlier is not visible. Based on the last known position of the milk frother base, and the position of the marked plug of food processor in the current frame, how far is the milk frother base from theplug of food processor?",
          choices: ["medium", "close", "far", "very close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "cc058509b79d0313",
            object_x_name: "milk frother base",
            object_x_reference_time_sec: 94.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "762824ba9d53a1cc",
            object_y_name: "plug of food processor",
            object_y_pixel: [372.52356859415124, 741.870487730254],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.2546791006618232, 0.9750982135230647, -1.3136772351133246,
            ],
            distance_m: 2.0617429640254437,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h30p0_2: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "e5066ca31ca315c2",
    object_a_name: "coffee capsule",
    query_time_sec: 94.0,
    query_time_in_clip_sec: 33.0,
    clip_start_time_sec: 61.0,
    clip_end_time_sec: 94.0,
    clip_duration_sec: 33.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "e5066ca31ca315c2",
      object_name: "coffee capsule",
      query_time_sec: 94.0,
      oos_span_start_sec: 64.0,
      oos_span_end_sec: 134.0,
      oos_duration_sec: 70.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 61.0,
      clip_end_time_sec: 94.0,
      clip_duration_sec: 33.0,
      anchor_assoc_id: "762824ba9d53a1cc",
      anchor_name: "plug of food processor",
      anchor_projected_pixel: [372.52356859415124, 741.870487730254],
      anchor_world_coordinates: [
        -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_2",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:01:34.0 video 1>, is the previously moved coffee capsule visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            1.1543894235569496, 0.9796268907163481, -0.9319749999997444,
          ],
          frame_index: 512,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved coffee capsule last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 63.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:01:03.0 video 1>",
          projected_pixel: [79.67303348294945, 891.2347870828407],
          normalized_projected_pixel: [0.05658596128050387, 0.6329792521895176],
          camera_coordinates: [
            -0.44417499580793973, 0.13310414521208866, 0.36966874010783046,
          ],
          frame_index: 512,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved coffee capsule stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 17.066666666666666,
          last_placement_time_in_clip_sec: -43.93333333333334,
          last_placement_time_token: "<TIME 00:00:17.1 video 1>",
          projected_pixel: [815.8550175293915, 977.0337979918461],
          normalized_projected_pixel: [0.579442484040761, 0.693916049710118],
          camera_coordinates: [
            0.07652906072722421, 0.1767822623175327, 0.39641937501053526,
          ],
          frame_index: 512,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
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
          "At the current time <TIME 00:01:34.0 video 1>, based on the last known position of the coffee capsule that was moved earlier,which fixture is closest to it?",
        choices: ["cupboard", "sink", "oven", "drawer", "counter"],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 63.0,
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
            "At the current time <TIME 00:01:34.0 video 1>, the coffee capsule that was moved earlier is not visible. Based on its last known position, in which direction is the coffee capsule from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 94.0,
            camera_coordinates: [
              1.1543894235569496, 0.9796268907163481, -0.9319749999997444,
            ],
            world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 1.1543894235569496,
              z: -0.9319749999997444,
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
            "At the current time <TIME 00:01:34.0 video 1>, the coffee capsule that was moved earlier is not visible. Based on the last known position of the coffee capsule and the position of the marked plug of food processor in the current frame, where is the coffee capsule relative to plug of food processor from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "e5066ca31ca315c2",
            object_x_name: "coffee capsule",
            object_x_reference_time_sec: 94.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            object_x_camera_coordinates: [
              1.1543894235569496, 0.9796268907163481, -0.9319749999997444,
            ],
            object_y_assoc_id: "762824ba9d53a1cc",
            object_y_name: "plug of food processor",
            object_y_reference_time_sec: 94.0,
            object_y_world_coordinates: [
              -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
            ],
            object_y_projected_pixel: [372.52356859415124, 741.870487730254],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:01:34.0 video 1>, the coffee capsule that was moved earlier is not visible. Based on the last known position of the coffee capsule, and the position of the marked plug of food processor in the current frame, how far is the coffee capsule from theplug of food processor?",
          choices: ["far", "close", "medium", "very close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "e5066ca31ca315c2",
            object_x_name: "coffee capsule",
            object_x_reference_time_sec: 94.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "762824ba9d53a1cc",
            object_y_name: "plug of food processor",
            object_y_pixel: [372.52356859415124, 741.870487730254],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              1.418014841354903, 0.9508445512656476, -1.4190339429543846,
            ],
            distance_m: 2.2200290048175066,
            distance_bucket: "far",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h30p0_3: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "b9deb700d00c2759",
    object_a_name: "box",
    query_time_sec: 120.0,
    query_time_in_clip_sec: 35.0,
    clip_start_time_sec: 85.0,
    clip_end_time_sec: 120.0,
    clip_duration_sec: 35.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "b9deb700d00c2759",
      object_name: "box",
      query_time_sec: 120.0,
      oos_span_start_sec: 90.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 306.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_drawer.005",
      relocation_score: 0,
      clip_start_time_sec: 85.0,
      clip_end_time_sec: 120.0,
      clip_duration_sec: 35.0,
      anchor_assoc_id: "762824ba9d53a1cc",
      anchor_name: "plug of food processor",
      anchor_projected_pixel: [1016.0580917832992, 620.4072598219511],
      anchor_world_coordinates: [
        -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_3",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:00.0 video 1>, is the previously moved box visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [50670.97191328968, -4164.3788876437375],
          camera_coordinates: [
            -0.5135459860013636, 0.8953507823881798, 0.09517213678227154,
          ],
          frame_index: 2670,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved box last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 87.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:01:27.0 video 1>",
          projected_pixel: [613.5443381187381, 1196.4480312268465],
          normalized_projected_pixel: [0.43575592195933105, 0.8497500221781581],
          camera_coordinates: [
            -0.09137204195741777, 0.528323950553321, 0.6138180824254854,
          ],
          frame_index: 2630,
          status: "observed_visible_in_open_fixture",
          fixture: "P01_cupboard.001",
          world_coordinates: [
            -0.5360941965727386, -3.2329176526781676, -0.8719763233812373,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved box stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 89.0,
          last_placement_time_in_clip_sec: 4.0,
          last_placement_time_token: "<TIME 00:01:29.0 video 1>",
          projected_pixel: [688.0486769731235, 1011.5823543076117],
          normalized_projected_pixel: [0.48867093535022976, 0.7184533766389287],
          camera_coordinates: [
            -0.009581703053680446, 0.27631085902908753, 0.5482465195240502,
          ],
          frame_index: 2670,
          status: "last_past_track_end",
          fixture: "P01_drawer.005",
          world_coordinates: [
            -0.4984044180038768, -3.2378298292045646, -0.7658775360587806,
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
          "At the current time <TIME 00:02:00.0 video 1>, based on the last known position of the box that was moved earlier,which fixture is closest to it?",
        choices: ["cupboard", "bin", "counter", "sink", "storage"],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 87.0,
          correct_fixture: "cupboard",
          raw_correct_fixture: "P01_cupboard.001",
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
            "At the current time <TIME 00:02:00.0 video 1>, the box that was moved earlier is not visible. Based on its last known position, in which direction is the box from your viewpoint?",
          choices: ["Front-left", "Back-left", "Back-right", "Front-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 120.0,
            camera_coordinates: [
              -0.5135459860013636, 0.8953507823881798, 0.09517213678227154,
            ],
            world_coordinates: [
              -0.4984044180038768, -3.2378298292045646, -0.7658775360587806,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -0.5135459860013636,
              z: 0.09517213678227154,
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
            "At the current time <TIME 00:02:00.0 video 1>, the box that was moved earlier is not visible. Based on the last known position of the box and the position of the marked plug of food processor in the current frame, where is the box relative to plug of food processor from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "b9deb700d00c2759",
            object_x_name: "box",
            object_x_reference_time_sec: 120.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.4984044180038768, -3.2378298292045646, -0.7658775360587806,
            ],
            object_x_camera_coordinates: [
              -0.5135459860013636, 0.8953507823881798, 0.09517213678227154,
            ],
            object_y_assoc_id: "762824ba9d53a1cc",
            object_y_name: "plug of food processor",
            object_y_reference_time_sec: 120.0,
            object_y_world_coordinates: [
              -1.7200807216201024, -3.256400007897545, -0.2638719891416884,
            ],
            object_y_projected_pixel: [1016.0580917832992, 620.4072598219511],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:02:00.0 video 1>, the box that was moved earlier is not visible. Based on the last known position of the box, and the position of the marked plug of food processor in the current frame, how far is the box from theplug of food processor?",
          choices: ["very close", "far", "medium", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "b9deb700d00c2759",
            object_x_name: "box",
            object_x_reference_time_sec: 120.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "762824ba9d53a1cc",
            object_y_name: "plug of food processor",
            object_y_pixel: [1016.0580917832992, 620.4072598219511],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.7884697747851446, 0.9697094448824942, -0.4275820602475857,
            ],
            distance_m: 1.3209267244967156,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h30p0_4: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "2defaf6678fa65eb",
    object_a_name: "third orange",
    query_time_sec: 144.0,
    query_time_in_clip_sec: 33.0,
    clip_start_time_sec: 111.0,
    clip_end_time_sec: 144.0,
    clip_duration_sec: 33.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "2defaf6678fa65eb",
      object_name: "third orange",
      query_time_sec: 144.0,
      oos_span_start_sec: 114.0,
      oos_span_end_sec: 184.0,
      oos_duration_sec: 70.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_counter.009",
      relocation_score: 2,
      clip_start_time_sec: 111.0,
      clip_end_time_sec: 144.0,
      clip_duration_sec: 33.0,
      anchor_assoc_id: "e5066ca31ca315c2",
      anchor_name: "coffee capsule",
      anchor_projected_pixel: [872.9408844687689, 983.2401278546449],
      anchor_world_coordinates: [
        -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_4",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:24.0 video 1>, is the previously moved third orange visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.2607466233252289, 0.9042467729339814, -0.7791409114810713,
          ],
          frame_index: 1746,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved third orange last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 113.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:01:53.0 video 1>",
          projected_pixel: [1291.225257802127, 837.0017426097497],
          normalized_projected_pixel: [0.9170633933253743, 0.5944614649216973],
          camera_coordinates: [
            0.661227043375431, 0.14610664731071588, 0.5976253864007035,
          ],
          frame_index: 1746,
          status: "in_view",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.5972297519549559, -2.045788293630638, -0.5122667372017932,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved third orange stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 58.2,
          last_placement_time_in_clip_sec: -52.8,
          last_placement_time_token: "<TIME 00:00:58.2 video 1>",
          projected_pixel: [785.5164671971219, 1122.7250196655798],
          normalized_projected_pixel: [0.557895218179774, 0.7973899287397583],
          camera_coordinates: [
            0.057009061952127515, 0.2727568619692564, 0.3841981316275753,
          ],
          frame_index: 1746,
          status: "last_past_track_end",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.5972297519549559, -2.045788293630638, -0.5122667372017932,
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
          "At the current time <TIME 00:02:24.0 video 1>, based on the last known position of the third orange that was moved earlier,which fixture is closest to it?",
        choices: ["counter", "oven", "cupboard", "shelf", "drawer"],
        correct_idx: 0,
        answer_metadata: {
          reference_time_sec: 113.0,
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
            "At the current time <TIME 00:02:24.0 video 1>, the third orange that was moved earlier is not visible. Based on its last known position, in which direction is the third orange from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 144.0,
            camera_coordinates: [
              0.2607466233252289, 0.9042467729339814, -0.7791409114810713,
            ],
            world_coordinates: [
              -1.5972297519549559, -2.045788293630638, -0.5122667372017932,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.2607466233252289,
              z: -0.7791409114810713,
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
            "At the current time <TIME 00:02:24.0 video 1>, the third orange that was moved earlier is not visible. Based on the last known position of the third orange and the position of the marked coffee capsule in the current frame, where is the third orange relative to coffee capsule from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "2defaf6678fa65eb",
            object_x_name: "third orange",
            object_x_reference_time_sec: 144.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5972297519549559, -2.045788293630638, -0.5122667372017932,
            ],
            object_x_camera_coordinates: [
              0.2607466233252289, 0.9042467729339814, -0.7791409114810713,
            ],
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_reference_time_sec: 144.0,
            object_y_world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            object_y_projected_pixel: [872.9408844687689, 983.2401278546449],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:02:24.0 video 1>, the third orange that was moved earlier is not visible. Based on the last known position of the third orange, and the position of the marked coffee capsule in the current frame, how far is the third orange from thecoffee capsule?",
          choices: ["close", "medium", "far", "very close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "2defaf6678fa65eb",
            object_x_name: "third orange",
            object_x_reference_time_sec: 144.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_pixel: [872.9408844687689, 983.2401278546449],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.13994502791411678, 0.7123272778422614, -1.1973370885632395,
            ],
            distance_m: 1.400218149162888,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h30p0_5: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "98dfab7aa5cc00f7",
    object_a_name: "pack of oranges",
    query_time_sec: 144.0,
    query_time_in_clip_sec: 33.0,
    clip_start_time_sec: 111.0,
    clip_end_time_sec: 144.0,
    clip_duration_sec: 33.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "98dfab7aa5cc00f7",
      object_name: "pack of oranges",
      query_time_sec: 144.0,
      oos_span_start_sec: 114.0,
      oos_span_end_sec: 184.0,
      oos_duration_sec: 70.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_counter.009",
      relocation_score: 0,
      clip_start_time_sec: 111.0,
      clip_end_time_sec: 144.0,
      clip_duration_sec: 33.0,
      anchor_assoc_id: "e5066ca31ca315c2",
      anchor_name: "coffee capsule",
      anchor_projected_pixel: [872.9408844687689, 983.2401278546449],
      anchor_world_coordinates: [
        -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_5",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:24.0 video 1>, is the previously moved pack of oranges visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.18136933856752013, 0.9866877354568622, -0.783335365621244,
          ],
          frame_index: 1583,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved pack of oranges last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 113.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:01:53.0 video 1>",
          projected_pixel: [1289.3902079954594, 837.0909832054366],
          normalized_projected_pixel: [0.9157600909058661, 0.5945248460265885],
          camera_coordinates: [
            0.7435259386754067, 0.1649107910751505, 0.6750085570027768,
          ],
          frame_index: 1583,
          status: "in_view",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved pack of oranges stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 52.766666666666666,
          last_placement_time_in_clip_sec: -58.233333333333334,
          last_placement_time_token: "<TIME 00:00:52.8 video 1>",
          projected_pixel: [824.8272249561401, 1096.3436425582445],
          normalized_projected_pixel: [0.5858147904518041, 0.778653155226026],
          camera_coordinates: [
            0.09726744699243639, 0.300345941185844, 0.45413175656108007,
          ],
          frame_index: 1583,
          status: "last_past_track_end",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
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
          "At the current time <TIME 00:02:24.0 video 1>, based on the last known position of the pack of oranges that was moved earlier,which fixture is closest to it?",
        choices: ["bin", "sink", "counter", "drawer", "cupboard"],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 113.0,
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
            "At the current time <TIME 00:02:24.0 video 1>, the pack of oranges that was moved earlier is not visible. Based on its last known position, in which direction is the pack of oranges from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 144.0,
            camera_coordinates: [
              0.18136933856752013, 0.9866877354568622, -0.783335365621244,
            ],
            world_coordinates: [
              -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.18136933856752013,
              z: -0.783335365621244,
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
            "At the current time <TIME 00:02:24.0 video 1>, the pack of oranges that was moved earlier is not visible. Based on the last known position of the pack of oranges and the position of the marked coffee capsule in the current frame, where is the pack of oranges relative to coffee capsule from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "98dfab7aa5cc00f7",
            object_x_name: "pack of oranges",
            object_x_reference_time_sec: 144.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
            ],
            object_x_camera_coordinates: [
              0.18136933856752013, 0.9866877354568622, -0.783335365621244,
            ],
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_reference_time_sec: 144.0,
            object_y_world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            object_y_projected_pixel: [872.9408844687689, 983.2401278546449],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:02:24.0 video 1>, the pack of oranges that was moved earlier is not visible. Based on the last known position of the pack of oranges, and the position of the marked coffee capsule in the current frame, how far is the pack of oranges from thecoffee capsule?",
          choices: ["medium", "very close", "far", "close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "98dfab7aa5cc00f7",
            object_x_name: "pack of oranges",
            object_x_reference_time_sec: 144.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_pixel: [872.9408844687689, 983.2401278546449],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.060567743156408005, 0.7947682403651422, -1.2015315427034121,
            ],
            distance_m: 1.4418748404474664,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h30p0_6: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "344ce01b15288a18",
    object_a_name: "green roll of recyclable bags",
    query_time_sec: 149.0,
    query_time_in_clip_sec: 33.0,
    clip_start_time_sec: 116.0,
    clip_end_time_sec: 149.0,
    clip_duration_sec: 33.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "344ce01b15288a18",
      object_name: "green roll of recyclable bags",
      query_time_sec: 149.0,
      oos_span_start_sec: 119.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 277.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_drawer.006",
      relocation_score: 0,
      clip_start_time_sec: 116.0,
      clip_end_time_sec: 149.0,
      clip_duration_sec: 33.0,
      anchor_assoc_id: "e5066ca31ca315c2",
      anchor_name: "coffee capsule",
      anchor_projected_pixel: [990.7908130752027, 700.3296211981559],
      anchor_world_coordinates: [
        -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_6",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:02:29.0 video 1>, is the previously moved green roll of recyclable bags visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.8195328858485025, 1.2210474659281516, -0.3330252223734931,
          ],
          frame_index: 3525,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved green roll of recyclable bags last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 118.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:01:58.0 video 1>",
          projected_pixel: [770.2097270189192, 1174.066376241039],
          normalized_projected_pixel: [0.5470239538486642, 0.8338539603984653],
          camera_coordinates: [
            0.055203342185973, 0.3596260547738698, 0.44271220881347295,
          ],
          frame_index: 3525,
          status: "observed_visible_in_open_fixture",
          fixture: "P01_drawer.006",
          world_coordinates: [
            -1.3423035800608654, -2.7031088881851524, -0.6063710978171934,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved green roll of recyclable bags stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 117.5,
          last_placement_time_in_clip_sec: 1.5,
          last_placement_time_token: "<TIME 00:01:57.5 video 1>",
          projected_pixel: [741.1186327367084, 1131.4996976122025],
          normalized_projected_pixel: [0.5263626652959577, 0.8036219443268483],
          camera_coordinates: [
            0.03377511045163617, 0.33669037802561597, 0.46408061787143096,
          ],
          frame_index: 3525,
          status: "last_past_track_end",
          fixture: "P01_drawer.006",
          world_coordinates: [
            -1.3423035800608654, -2.7031088881851524, -0.6063710978171934,
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
          "At the current time <TIME 00:02:29.0 video 1>, based on the last known position of the green roll of recyclable bags that was moved earlier,which fixture is closest to it?",
        choices: ["shelf", "drawer", "oven", "storage", "fridgefreezer"],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 118.0,
          correct_fixture: "drawer",
          raw_correct_fixture: "P01_drawer.006",
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
            "At the current time <TIME 00:02:29.0 video 1>, the green roll of recyclable bags that was moved earlier is not visible. Based on its last known position, in which direction is the green roll of recyclable bags from your viewpoint?",
          choices: ["Front-left", "Back-right", "Back-left", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 149.0,
            camera_coordinates: [
              0.8195328858485025, 1.2210474659281516, -0.3330252223734931,
            ],
            world_coordinates: [
              -1.3423035800608654, -2.7031088881851524, -0.6063710978171934,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.8195328858485025,
              z: -0.3330252223734931,
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
            "At the current time <TIME 00:02:29.0 video 1>, the green roll of recyclable bags that was moved earlier is not visible. Based on the last known position of the green roll of recyclable bags and the position of the marked coffee capsule in the current frame, where is the green roll of recyclable bags relative to coffee capsule from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "344ce01b15288a18",
            object_x_name: "green roll of recyclable bags",
            object_x_reference_time_sec: 149.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.3423035800608654, -2.7031088881851524, -0.6063710978171934,
            ],
            object_x_camera_coordinates: [
              0.8195328858485025, 1.2210474659281516, -0.3330252223734931,
            ],
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_reference_time_sec: 149.0,
            object_y_world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            object_y_projected_pixel: [990.7908130752027, 700.3296211981559],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:02:29.0 video 1>, the green roll of recyclable bags that was moved earlier is not visible. Based on the last known position of the green roll of recyclable bags, and the position of the marked coffee capsule in the current frame, how far is the green roll of recyclable bags from thecoffee capsule?",
          choices: ["close", "medium", "far", "very close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "344ce01b15288a18",
            object_x_name: "green roll of recyclable bags",
            object_x_reference_time_sec: 149.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "e5066ca31ca315c2",
            object_y_name: "coffee capsule",
            object_y_pixel: [990.7908130752027, 700.3296211981559],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6112467824700099, 1.2252982757050501, -0.7663446282165454,
            ],
            distance_m: 1.5691598333892132,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h30p0_7: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "c79d145ffded5b56",
    object_a_name: "green sponge",
    query_time_sec: 207.0,
    query_time_in_clip_sec: 33.0,
    clip_start_time_sec: 174.0,
    clip_end_time_sec: 207.0,
    clip_duration_sec: 33.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "c79d145ffded5b56",
      object_name: "green sponge",
      query_time_sec: 207.0,
      oos_span_start_sec: 177.0,
      oos_span_end_sec: 318.0,
      oos_duration_sec: 141.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_counter.005",
      relocation_score: 0,
      clip_start_time_sec: 174.0,
      clip_end_time_sec: 207.0,
      clip_duration_sec: 33.0,
      anchor_assoc_id: "429e077d1a0a5f1d",
      anchor_name: "cone",
      anchor_projected_pixel: [940.4549497809325, 810.2729140380559],
      anchor_world_coordinates: [
        -1.5838896457026381, -2.8930383005100735, -0.33619028790097916,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_7",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:03:27.0 video 1>, is the previously moved green sponge visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-2514.8487508726403, 1912.2283626881729],
          camera_coordinates: [
            -1.2261702914971044, 0.43196838041466745, 0.22383790205554144,
          ],
          frame_index: 5133,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved green sponge last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 176.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:02:56.0 video 1>",
          projected_pixel: [1052.5152895984902, 943.938565198378],
          normalized_projected_pixel: [0.7475250636352914, 0.670410912782939],
          camera_coordinates: [
            0.359207377061026, 0.2412032349090289, 0.59562507597932,
          ],
          frame_index: 5133,
          status: "in_view",
          fixture: "P01_counter.005",
          world_coordinates: [
            -0.6698619365527481, -3.963942226995411, -0.5533494796850447,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved green sponge stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 171.1,
          last_placement_time_in_clip_sec: -2.9000000000000057,
          last_placement_time_token: "<TIME 00:02:51.1 video 1>",
          projected_pixel: [695.4830678864764, 955.2838481257412],
          normalized_projected_pixel: [0.4939510425330088, 0.6784686421347593],
          camera_coordinates: [
            -0.0027745723337000427, 0.21416522083019585, 0.5252546490626533,
          ],
          frame_index: 5133,
          status: "last_past_track_end",
          fixture: "P01_counter.005",
          world_coordinates: [
            -0.6698619365527481, -3.963942226995411, -0.5533494796850447,
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
          "At the current time <TIME 00:03:27.0 video 1>, based on the last known position of the green sponge that was moved earlier,which fixture is closest to it?",
        choices: ["oven", "drawer", "cupboard", "counter", "shelf"],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 176.0,
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
            "At the current time <TIME 00:03:27.0 video 1>, the green sponge that was moved earlier is not visible. Based on its last known position, in which direction is the green sponge from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 207.0,
            camera_coordinates: [
              -1.2261702914971044, 0.43196838041466745, 0.22383790205554144,
            ],
            world_coordinates: [
              -0.6698619365527481, -3.963942226995411, -0.5533494796850447,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -1.2261702914971044,
              z: 0.22383790205554144,
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
            "At the current time <TIME 00:03:27.0 video 1>, the green sponge that was moved earlier is not visible. Based on the last known position of the green sponge and the position of the marked cone in the current frame, where is the green sponge relative to cone from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "c79d145ffded5b56",
            object_x_name: "green sponge",
            object_x_reference_time_sec: 207.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.6698619365527481, -3.963942226995411, -0.5533494796850447,
            ],
            object_x_camera_coordinates: [
              -1.2261702914971044, 0.43196838041466745, 0.22383790205554144,
            ],
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_reference_time_sec: 207.0,
            object_y_world_coordinates: [
              -1.5838896457026381, -2.8930383005100735, -0.33619028790097916,
            ],
            object_y_projected_pixel: [940.4549497809325, 810.2729140380559],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:03:27.0 video 1>, the green sponge that was moved earlier is not visible. Based on the last known position of the green sponge, and the position of the marked cone in the current frame, how far is the green sponge from thecone?",
          choices: ["close", "very close", "far", "medium"],
          correct_idx: 3,
          answer_metadata: {
            object_x_assoc_id: "c79d145ffded5b56",
            object_x_name: "green sponge",
            object_x_reference_time_sec: 207.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_pixel: [940.4549497809325, 810.2729140380559],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -1.3687771527020518, 0.3706430164555248, -0.13606192717079102,
            ],
            distance_m: 1.4245841454374735,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h30p0_8: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "e44a21e6e04d424c",
    object_a_name: "mug",
    query_time_sec: 211.0,
    query_time_in_clip_sec: 33.0,
    clip_start_time_sec: 178.0,
    clip_end_time_sec: 211.0,
    clip_duration_sec: 33.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "e44a21e6e04d424c",
      object_name: "mug",
      query_time_sec: 211.0,
      oos_span_start_sec: 181.0,
      oos_span_end_sec: 348.0,
      oos_duration_sec: 167.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 1,
      clip_start_time_sec: 178.0,
      clip_end_time_sec: 211.0,
      clip_duration_sec: 33.0,
      anchor_assoc_id: "429e077d1a0a5f1d",
      anchor_name: "cone",
      anchor_projected_pixel: [939.203800692719, 788.5173052697551],
      anchor_world_coordinates: [
        -1.5838896457026381, -2.8930383005100735, -0.33619028790097916,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_8",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:03:31.0 video 1>, is the previously moved mug visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.9440660562852818, 1.2136172098635152, -0.609032751768908,
          ],
          frame_index: 4542,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved mug last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 180.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:03:00.0 video 1>",
          projected_pixel: [335.40466600296094, 1025.6471091321778],
          normalized_projected_pixel: [0.23821354119528476, 0.7284425490995581],
          camera_coordinates: [
            -0.26982530528492865, 0.23752701507287155, 0.4257015227495615,
          ],
          frame_index: 4542,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved mug stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 151.4,
          last_placement_time_in_clip_sec: -26.599999999999994,
          last_placement_time_token: "<TIME 00:02:31.4 video 1>",
          projected_pixel: [868.791544882566, 1070.2205458765811],
          normalized_projected_pixel: [0.6170394494904587, 0.7600998195146172],
          camera_coordinates: [
            0.10851837599360303, 0.23195471287369096, 0.3769631928642932,
          ],
          frame_index: 4542,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
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
          "At the current time <TIME 00:03:31.0 video 1>, based on the last known position of the mug that was moved earlier,which fixture is closest to it?",
        choices: ["sink", "shelf", "counter", "oven", "storage"],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 180.0,
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
            "At the current time <TIME 00:03:31.0 video 1>, the mug that was moved earlier is not visible. Based on its last known position, in which direction is the mug from your viewpoint?",
          choices: ["Back-right", "Front-left", "Back-left", "Front-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 211.0,
            camera_coordinates: [
              0.9440660562852818, 1.2136172098635152, -0.609032751768908,
            ],
            world_coordinates: [
              -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.9440660562852818,
              z: -0.609032751768908,
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
            "At the current time <TIME 00:03:31.0 video 1>, the mug that was moved earlier is not visible. Based on the last known position of the mug and the position of the marked cone in the current frame, where is the mug relative to cone from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "e44a21e6e04d424c",
            object_x_name: "mug",
            object_x_reference_time_sec: 211.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
            ],
            object_x_camera_coordinates: [
              0.9440660562852818, 1.2136172098635152, -0.609032751768908,
            ],
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_reference_time_sec: 211.0,
            object_y_world_coordinates: [
              -1.5838896457026381, -2.8930383005100735, -0.33619028790097916,
            ],
            object_y_projected_pixel: [939.203800692719, 788.5173052697551],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:03:31.0 video 1>, the mug that was moved earlier is not visible. Based on the last known position of the mug, and the position of the marked cone in the current frame, how far is the mug from thecone?",
          choices: ["far", "very close", "close", "medium"],
          correct_idx: 3,
          answer_metadata: {
            object_x_assoc_id: "e44a21e6e04d424c",
            object_x_name: "mug",
            object_x_reference_time_sec: 211.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_pixel: [939.203800692719, 788.5173052697551],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.7946676561315604, 1.1625513225828996, -0.9884391377962511,
            ],
            distance_m: 1.7204749897828429,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h30p0_9: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "c60c10f7d1acb901",
    object_a_name: "lid of milk frother",
    query_time_sec: 211.0,
    query_time_in_clip_sec: 33.0,
    clip_start_time_sec: 178.0,
    clip_end_time_sec: 211.0,
    clip_duration_sec: 33.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "c60c10f7d1acb901",
      object_name: "lid of milk frother",
      query_time_sec: 211.0,
      oos_span_start_sec: 181.0,
      oos_span_end_sec: 348.0,
      oos_duration_sec: 167.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 178.0,
      clip_end_time_sec: 211.0,
      clip_duration_sec: 33.0,
      anchor_assoc_id: "429e077d1a0a5f1d",
      anchor_name: "cone",
      anchor_projected_pixel: [939.203800692719, 788.5173052697551],
      anchor_world_coordinates: [
        -1.5838896457026381, -2.8930383005100735, -0.33619028790097916,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_9",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:03:31.0 video 1>, is the previously moved lid of milk frother visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.7526523418961211, 1.194643456291801, -0.7386115430074509,
          ],
          frame_index: 5396,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved lid of milk frother last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 180.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:03:00.0 video 1>",
          projected_pixel: [570.6797745649238, 819.5119458465766],
          normalized_projected_pixel: [0.40531233988986065, 0.5820397342660345],
          camera_coordinates: [
            -0.10231666274246809, 0.0903828994709831, 0.48957123730206037,
          ],
          frame_index: 5396,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.358569128705764, -1.703000926376473, -0.3998278790577944,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved lid of milk frother stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 179.86666666666667,
          last_placement_time_in_clip_sec: 1.8666666666666742,
          last_placement_time_token: "<TIME 00:02:59.9 video 1>",
          projected_pixel: [741.9679871775925, 843.7168510525114],
          normalized_projected_pixel: [0.5269658999840856, 0.5992307180770677],
          camera_coordinates: [
            0.03632677259438277, 0.11562772116993558, 0.5163359529849898,
          ],
          frame_index: 5396,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.358569128705764, -1.703000926376473, -0.3998278790577944,
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
          "At the current time <TIME 00:03:31.0 video 1>, based on the last known position of the lid of milk frother that was moved earlier,which fixture is closest to it?",
        choices: ["drawer", "cupboard", "sink", "shelf", "counter"],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 180.0,
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
            "At the current time <TIME 00:03:31.0 video 1>, the lid of milk frother that was moved earlier is not visible. Based on its last known position, in which direction is the lid of milk frother from your viewpoint?",
          choices: ["Back-right", "Front-right", "Back-left", "Front-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 211.0,
            camera_coordinates: [
              0.7526523418961211, 1.194643456291801, -0.7386115430074509,
            ],
            world_coordinates: [
              -0.358569128705764, -1.703000926376473, -0.3998278790577944,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.7526523418961211,
              z: -0.7386115430074509,
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
            "At the current time <TIME 00:03:31.0 video 1>, the lid of milk frother that was moved earlier is not visible. Based on the last known position of the lid of milk frother and the position of the marked cone in the current frame, where is the lid of milk frother relative to cone from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "c60c10f7d1acb901",
            object_x_name: "lid of milk frother",
            object_x_reference_time_sec: 211.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.358569128705764, -1.703000926376473, -0.3998278790577944,
            ],
            object_x_camera_coordinates: [
              0.7526523418961211, 1.194643456291801, -0.7386115430074509,
            ],
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_reference_time_sec: 211.0,
            object_y_world_coordinates: [
              -1.5838896457026381, -2.8930383005100735, -0.33619028790097916,
            ],
            object_y_projected_pixel: [939.203800692719, 788.5173052697551],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:03:31.0 video 1>, the lid of milk frother that was moved earlier is not visible. Based on the last known position of the lid of milk frother, and the position of the marked cone in the current frame, how far is the lid of milk frother from thecone?",
          choices: ["close", "far", "medium", "very close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "c60c10f7d1acb901",
            object_x_name: "lid of milk frother",
            object_x_reference_time_sec: 211.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_pixel: [939.203800692719, 788.5173052697551],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6032539417423997, 1.1435775690111853, -1.118017929034794,
            ],
            distance_m: 1.7092832018763084,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h30p0_10: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "cc058509b79d0313",
    object_a_name: "milk frother base",
    query_time_sec: 211.0,
    query_time_in_clip_sec: 33.0,
    clip_start_time_sec: 178.0,
    clip_end_time_sec: 211.0,
    clip_duration_sec: 33.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "cc058509b79d0313",
      object_name: "milk frother base",
      query_time_sec: 211.0,
      oos_span_start_sec: 181.0,
      oos_span_end_sec: 348.0,
      oos_duration_sec: 167.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 178.0,
      clip_end_time_sec: 211.0,
      clip_duration_sec: 33.0,
      anchor_assoc_id: "429e077d1a0a5f1d",
      anchor_name: "cone",
      anchor_projected_pixel: [939.203800692719, 788.5173052697551],
      anchor_world_coordinates: [
        -1.5838896457026381, -2.8930383005100735, -0.33619028790097916,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_10",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:03:31.0 video 1>, is the previously moved milk frother base visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.7372297593903501, 1.2361398788716236, -0.6582579955358028,
          ],
          frame_index: 5343,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved milk frother base last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 180.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:03:00.0 video 1>",
          projected_pixel: [596.1959304177016, 914.4808364978855],
          normalized_projected_pixel: [0.423434609671663, 0.6494892304672483],
          camera_coordinates: [
            -0.08683803858661876, 0.17629711473539555, 0.5177787104092191,
          ],
          frame_index: 5343,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved milk frother base stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 178.1,
          last_placement_time_in_clip_sec: 0.09999999999999432,
          last_placement_time_token: "<TIME 00:02:58.1 video 1>",
          projected_pixel: [866.086453980851, 951.0652939886792],
          normalized_projected_pixel: [0.6151182201568545, 0.6754725099351414],
          camera_coordinates: [
            0.1578517051626399, 0.23076138599129448, 0.572306223421392,
          ],
          frame_index: 5343,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
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
          "At the current time <TIME 00:03:31.0 video 1>, based on the last known position of the milk frother base that was moved earlier,which fixture is closest to it?",
        choices: ["storage", "oven", "counter", "cupboard", "drawer"],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 180.0,
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
            "At the current time <TIME 00:03:31.0 video 1>, the milk frother base that was moved earlier is not visible. Based on its last known position, in which direction is the milk frother base from your viewpoint?",
          choices: ["Front-left", "Back-right", "Front-right", "Back-left"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 211.0,
            camera_coordinates: [
              0.7372297593903501, 1.2361398788716236, -0.6582579955358028,
            ],
            world_coordinates: [
              -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.7372297593903501,
              z: -0.6582579955358028,
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
            "At the current time <TIME 00:03:31.0 video 1>, the milk frother base that was moved earlier is not visible. Based on the last known position of the milk frother base and the position of the marked cone in the current frame, where is the milk frother base relative to cone from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "cc058509b79d0313",
            object_x_name: "milk frother base",
            object_x_reference_time_sec: 211.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
            ],
            object_x_camera_coordinates: [
              0.7372297593903501, 1.2361398788716236, -0.6582579955358028,
            ],
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_reference_time_sec: 211.0,
            object_y_world_coordinates: [
              -1.5838896457026381, -2.8930383005100735, -0.33619028790097916,
            ],
            object_y_projected_pixel: [939.203800692719, 788.5173052697551],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:03:31.0 video 1>, the milk frother base that was moved earlier is not visible. Based on the last known position of the milk frother base, and the position of the marked cone in the current frame, how far is the milk frother base from thecone?",
          choices: ["very close", "close", "medium", "far"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "cc058509b79d0313",
            object_x_name: "milk frother base",
            object_x_reference_time_sec: 211.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_pixel: [939.203800692719, 788.5173052697551],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.5878313592366287, 1.185073991591008, -1.0376643815631459,
            ],
            distance_m: 1.6812773243020478,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h30p0_11: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "e5066ca31ca315c2",
    object_a_name: "coffee capsule",
    query_time_sec: 211.0,
    query_time_in_clip_sec: 33.0,
    clip_start_time_sec: 178.0,
    clip_end_time_sec: 211.0,
    clip_duration_sec: 33.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "e5066ca31ca315c2",
      object_name: "coffee capsule",
      query_time_sec: 211.0,
      oos_span_start_sec: 181.0,
      oos_span_end_sec: 348.0,
      oos_duration_sec: 167.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_counter.001",
      relocation_score: 0,
      clip_start_time_sec: 178.0,
      clip_end_time_sec: 211.0,
      clip_duration_sec: 33.0,
      anchor_assoc_id: "429e077d1a0a5f1d",
      anchor_name: "cone",
      anchor_projected_pixel: [939.203800692719, 788.5173052697551],
      anchor_world_coordinates: [
        -1.5838896457026381, -2.8930383005100735, -0.33619028790097916,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_11",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:03:31.0 video 1>, is the previously moved coffee capsule visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.8564627751203273, 1.2607317080602822, -0.8387386924321976,
          ],
          frame_index: 512,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved coffee capsule last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 180.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:03:00.0 video 1>",
          projected_pixel: [434.3908964560661, 725.9548324067944],
          normalized_projected_pixel: [0.308516261687547, 0.5155929207434619],
          camera_coordinates: [
            -0.2340783517099887, 0.01740222166368821, 0.5393947970619912,
          ],
          frame_index: 512,
          status: "in_view",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved coffee capsule stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 17.066666666666666,
          last_placement_time_in_clip_sec: -160.93333333333334,
          last_placement_time_token: "<TIME 00:00:17.1 video 1>",
          projected_pixel: [815.8550175293915, 977.0337979918461],
          normalized_projected_pixel: [0.579442484040761, 0.693916049710118],
          camera_coordinates: [
            0.07652906072722421, 0.1767822623175327, 0.39641937501053526,
          ],
          frame_index: 512,
          status: "last_past_track_end",
          fixture: "P01_counter.001",
          world_coordinates: [
            -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
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
          "At the current time <TIME 00:03:31.0 video 1>, based on the last known position of the coffee capsule that was moved earlier,which fixture is closest to it?",
        choices: ["bin", "drawer", "cupboard", "fridgefreezer", "counter"],
        correct_idx: 4,
        answer_metadata: {
          reference_time_sec: 180.0,
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
            "At the current time <TIME 00:03:31.0 video 1>, the coffee capsule that was moved earlier is not visible. Based on its last known position, in which direction is the coffee capsule from your viewpoint?",
          choices: ["Front-right", "Back-left", "Back-right", "Front-left"],
          correct_idx: 2,
          answer_metadata: {
            reference_time_sec: 211.0,
            camera_coordinates: [
              0.8564627751203273, 1.2607317080602822, -0.8387386924321976,
            ],
            world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.8564627751203273,
              z: -0.8387386924321976,
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
            "At the current time <TIME 00:03:31.0 video 1>, the coffee capsule that was moved earlier is not visible. Based on the last known position of the coffee capsule and the position of the marked cone in the current frame, where is the coffee capsule relative to cone from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "e5066ca31ca315c2",
            object_x_name: "coffee capsule",
            object_x_reference_time_sec: 211.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -0.2904226769932531, -1.5617024772150194, -0.3761526070741452,
            ],
            object_x_camera_coordinates: [
              0.8564627751203273, 1.2607317080602822, -0.8387386924321976,
            ],
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_reference_time_sec: 211.0,
            object_y_world_coordinates: [
              -1.5838896457026381, -2.8930383005100735, -0.33619028790097916,
            ],
            object_y_projected_pixel: [939.203800692719, 788.5173052697551],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:03:31.0 video 1>, the coffee capsule that was moved earlier is not visible. Based on the last known position of the coffee capsule, and the position of the marked cone in the current frame, how far is the coffee capsule from thecone?",
          choices: ["far", "medium", "very close", "close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "e5066ca31ca315c2",
            object_x_name: "coffee capsule",
            object_x_reference_time_sec: 211.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_pixel: [939.203800692719, 788.5173052697551],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.7070643749666059, 1.2096658207796667, -1.2181450784595407,
            ],
            distance_m: 1.8566391303871257,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h30p0_12: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "98dfab7aa5cc00f7",
    object_a_name: "pack of oranges",
    query_time_sec: 312.0,
    query_time_in_clip_sec: 33.0,
    clip_start_time_sec: 279.0,
    clip_end_time_sec: 312.0,
    clip_duration_sec: 33.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "98dfab7aa5cc00f7",
      object_name: "pack of oranges",
      query_time_sec: 312.0,
      oos_span_start_sec: 282.0,
      oos_span_end_sec: 354.0,
      oos_duration_sec: 72.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_counter.009",
      relocation_score: 0,
      clip_start_time_sec: 279.0,
      clip_end_time_sec: 312.0,
      clip_duration_sec: 33.0,
      anchor_assoc_id: "429e077d1a0a5f1d",
      anchor_name: "cone",
      anchor_projected_pixel: [821.708387754765, 998.2455597750156],
      anchor_world_coordinates: [
        -1.5838896457026381, -2.8930383005100735, -0.33619028790097916,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_12",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:05:12.0 video 1>, is the previously moved pack of oranges visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [1398.3647060060339, 1083.7919809324924],
          camera_coordinates: [
            0.9199725867856607, 0.496912335365868, 0.48643551881396885,
          ],
          frame_index: 1583,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved pack of oranges last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 281.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:04:41.0 video 1>",
          projected_pixel: [1322.7581214462316, 841.754432508701],
          normalized_projected_pixel: [0.9394588930726077, 0.5978369549067479],
          camera_coordinates: [
            0.9501708474852082, 0.20665425618394684, 0.7932641049097802,
          ],
          frame_index: 1583,
          status: "in_view",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved pack of oranges stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 52.766666666666666,
          last_placement_time_in_clip_sec: -226.23333333333335,
          last_placement_time_token: "<TIME 00:00:52.8 video 1>",
          projected_pixel: [824.8272249561401, 1096.3436425582445],
          normalized_projected_pixel: [0.5858147904518041, 0.778653155226026],
          camera_coordinates: [
            0.09726744699243639, 0.300345941185844, 0.45413175656108007,
          ],
          frame_index: 1583,
          status: "last_past_track_end",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
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
          "At the current time <TIME 00:05:12.0 video 1>, based on the last known position of the pack of oranges that was moved earlier,which fixture is closest to it?",
        choices: ["drawer", "counter", "oven", "cupboard", "storage"],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 281.0,
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
            "At the current time <TIME 00:05:12.0 video 1>, the pack of oranges that was moved earlier is not visible. Based on its last known position, in which direction is the pack of oranges from your viewpoint?",
          choices: ["Back-left", "Front-right", "Front-left", "Back-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 312.0,
            camera_coordinates: [
              0.9199725867856607, 0.496912335365868, 0.48643551881396885,
            ],
            world_coordinates: [
              -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
            ],
            status: "out_of_view",
            correct_label: "Front-right",
            debug: {
              x: 0.9199725867856607,
              z: 0.48643551881396885,
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
            "At the current time <TIME 00:05:12.0 video 1>, the pack of oranges that was moved earlier is not visible. Based on the last known position of the pack of oranges and the position of the marked cone in the current frame, where is the pack of oranges relative to cone from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 1,
          acceptable_idxs: [1],
          answer_metadata: {
            object_x_assoc_id: "98dfab7aa5cc00f7",
            object_x_name: "pack of oranges",
            object_x_reference_time_sec: 312.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
            ],
            object_x_camera_coordinates: [
              0.9199725867856607, 0.496912335365868, 0.48643551881396885,
            ],
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_reference_time_sec: 312.0,
            object_y_world_coordinates: [
              -1.5838896457026381, -2.8930383005100735, -0.33619028790097916,
            ],
            object_y_projected_pixel: [821.708387754765, 998.2455597750156],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:05:12.0 video 1>, the pack of oranges that was moved earlier is not visible. Based on the last known position of the pack of oranges, and the position of the marked cone in the current frame, how far is the pack of oranges from thecone?",
          choices: ["close", "medium", "very close", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "98dfab7aa5cc00f7",
            object_x_name: "pack of oranges",
            object_x_reference_time_sec: 312.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "429e077d1a0a5f1d",
            object_y_name: "cone",
            object_y_pixel: [821.708387754765, 998.2455597750156],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.8617221262580148, 0.35874086272890326, 0.2002582812731335,
            ],
            distance_m: 0.9546535542764093,
            distance_bucket: "close",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h30p0_13: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "11785d3856c2848f",
    object_a_name: "right half of third orange",
    query_time_sec: 390.0,
    query_time_in_clip_sec: 33.0,
    clip_start_time_sec: 357.0,
    clip_end_time_sec: 390.0,
    clip_duration_sec: 33.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "11785d3856c2848f",
      object_name: "right half of third orange",
      query_time_sec: 390.0,
      oos_span_start_sec: 360.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 36.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 357.0,
      clip_end_time_sec: 390.0,
      clip_duration_sec: 33.0,
      anchor_assoc_id: "4870a5041fe72cb4",
      anchor_name: "juicer bowl",
      anchor_projected_pixel: [670.5992535022874, 864.2543910284928],
      anchor_world_coordinates: [
        -0.15512237716269878, -3.8791055502535294, -0.5162308763289616,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_13",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:30.0 video 1>, is the previously moved right half of third orange visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.33318289776795673, 0.5843860189816503, -0.5469454695555602,
          ],
          frame_index: 8418,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved right half of third orange last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 359.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:05:59.0 video 1>",
          projected_pixel: [283.68878860044777, 952.366618687329],
          normalized_projected_pixel: [0.20148351463099984, 0.6763967462267962],
          camera_coordinates: [
            -0.2545030207171117, 0.15112167583694225, 0.351580250341041,
          ],
          frame_index: 8418,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved right half of third orange stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 280.6,
          last_placement_time_in_clip_sec: -76.39999999999998,
          last_placement_time_token: "<TIME 00:04:40.6 video 1>",
          projected_pixel: [707.8916574026206, 1011.3657604466664],
          normalized_projected_pixel: [0.5027639612234521, 0.7182995457717801],
          camera_coordinates: [
            0.005388913896646308, 0.17762710304218243, 0.3527314360064464,
          ],
          frame_index: 8418,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
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
          "At the current time <TIME 00:06:30.0 video 1>, based on the last known position of the right half of third orange that was moved earlier,which fixture is closest to it?",
        choices: ["sink", "shelf", "drawer", "counter", "fridgefreezer"],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 359.0,
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
            "At the current time <TIME 00:06:30.0 video 1>, the right half of third orange that was moved earlier is not visible. Based on its last known position, in which direction is the right half of third orange from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-right", "Front-left"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 390.0,
            camera_coordinates: [
              0.33318289776795673, 0.5843860189816503, -0.5469454695555602,
            ],
            world_coordinates: [
              -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.33318289776795673,
              z: -0.5469454695555602,
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
            "At the current time <TIME 00:06:30.0 video 1>, the right half of third orange that was moved earlier is not visible. Based on the last known position of the right half of third orange and the position of the marked juicer bowl in the current frame, where is the right half of third orange relative to juicer bowl from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "11785d3856c2848f",
            object_x_name: "right half of third orange",
            object_x_reference_time_sec: 390.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4395017388829636, -3.2094870739061987, -0.3353081034716703,
            ],
            object_x_camera_coordinates: [
              0.33318289776795673, 0.5843860189816503, -0.5469454695555602,
            ],
            object_y_assoc_id: "4870a5041fe72cb4",
            object_y_name: "juicer bowl",
            object_y_reference_time_sec: 390.0,
            object_y_world_coordinates: [
              -0.15512237716269878, -3.8791055502535294, -0.5162308763289616,
            ],
            object_y_projected_pixel: [670.5992535022874, 864.2543910284928],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:30.0 video 1>, the right half of third orange that was moved earlier is not visible. Based on the last known position of the right half of third orange, and the position of the marked juicer bowl in the current frame, how far is the right half of third orange from thejuicer bowl?",
          choices: ["close", "medium", "far", "very close"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "11785d3856c2848f",
            object_x_name: "right half of third orange",
            object_x_reference_time_sec: 390.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "4870a5041fe72cb4",
            object_y_name: "juicer bowl",
            object_y_pixel: [670.5992535022874, 864.2543910284928],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.370627605744561, 0.3747102850026688, -1.3612419618092586,
            ],
            distance_m: 1.459709662370242,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h30p0_14: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "37b4dde2b16602ca",
    object_a_name: "left half of first orange",
    query_time_sec: 390.0,
    query_time_in_clip_sec: 33.0,
    clip_start_time_sec: 357.0,
    clip_end_time_sec: 390.0,
    clip_duration_sec: 33.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "37b4dde2b16602ca",
      object_name: "left half of first orange",
      query_time_sec: 390.0,
      oos_span_start_sec: 360.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 36.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 357.0,
      clip_end_time_sec: 390.0,
      clip_duration_sec: 33.0,
      anchor_assoc_id: "4870a5041fe72cb4",
      anchor_name: "juicer bowl",
      anchor_projected_pixel: [670.5992535022874, 864.2543910284928],
      anchor_world_coordinates: [
        -0.15512237716269878, -3.8791055502535294, -0.5162308763289616,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_14",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:30.0 video 1>, is the previously moved left half of first orange visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.30966718789962977, 0.5874528670631721, -0.5891959562110314,
          ],
          frame_index: 6107,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved left half of first orange last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 359.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:05:59.0 video 1>",
          projected_pixel: [334.3310604911878, 956.9134170354029],
          normalized_projected_pixel: [0.23745103728067318, 0.6796260064171895],
          camera_coordinates: [
            -0.20948873866439177, 0.1442646249161219, 0.33502147459106446,
          ],
          frame_index: 6107,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved left half of first orange stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 203.56666666666666,
          last_placement_time_in_clip_sec: -153.43333333333334,
          last_placement_time_token: "<TIME 00:03:23.6 video 1>",
          projected_pixel: [785.0005531799161, 1021.4842594087353],
          normalized_projected_pixel: [0.5575288019743723, 0.725485979693704],
          camera_coordinates: [
            0.047650744711954296, 0.1738550495410629, 0.33280353427287634,
          ],
          frame_index: 6107,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
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
          "At the current time <TIME 00:06:30.0 video 1>, based on the last known position of the left half of first orange that was moved earlier,which fixture is closest to it?",
        choices: ["storage", "sink", "counter", "fridgefreezer", "cupboard"],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 359.0,
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
            "At the current time <TIME 00:06:30.0 video 1>, the left half of first orange that was moved earlier is not visible. Based on its last known position, in which direction is the left half of first orange from your viewpoint?",
          choices: ["Front-right", "Front-left", "Back-left", "Back-right"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 390.0,
            camera_coordinates: [
              0.30966718789962977, 0.5874528670631721, -0.5891959562110314,
            ],
            world_coordinates: [
              -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.30966718789962977,
              z: -0.5891959562110314,
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
            "At the current time <TIME 00:06:30.0 video 1>, the left half of first orange that was moved earlier is not visible. Based on the last known position of the left half of first orange and the position of the marked juicer bowl in the current frame, where is the left half of first orange relative to juicer bowl from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "37b4dde2b16602ca",
            object_x_name: "left half of first orange",
            object_x_reference_time_sec: 390.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4534320903491111, -3.1659733051476002, -0.31918374218684986,
            ],
            object_x_camera_coordinates: [
              0.30966718789962977, 0.5874528670631721, -0.5891959562110314,
            ],
            object_y_assoc_id: "4870a5041fe72cb4",
            object_y_name: "juicer bowl",
            object_y_reference_time_sec: 390.0,
            object_y_world_coordinates: [
              -0.15512237716269878, -3.8791055502535294, -0.5162308763289616,
            ],
            object_y_projected_pixel: [670.5992535022874, 864.2543910284928],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:30.0 video 1>, the left half of first orange that was moved earlier is not visible. Based on the last known position of the left half of first orange, and the position of the marked juicer bowl in the current frame, how far is the left half of first orange from thejuicer bowl?",
          choices: ["close", "far", "medium", "very close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "37b4dde2b16602ca",
            object_x_name: "left half of first orange",
            object_x_reference_time_sec: 390.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "4870a5041fe72cb4",
            object_y_name: "juicer bowl",
            object_y_pixel: [670.5992535022874, 864.2543910284928],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.34711189587623403, 0.3777771330841906, -1.4034924484647298,
            ],
            distance_m: 1.4943203416395112,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h30p0_15: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "98dfab7aa5cc00f7",
    object_a_name: "pack of oranges",
    query_time_sec: 391.0,
    query_time_in_clip_sec: 33.0,
    clip_start_time_sec: 358.0,
    clip_end_time_sec: 391.0,
    clip_duration_sec: 33.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "98dfab7aa5cc00f7",
      object_name: "pack of oranges",
      query_time_sec: 391.0,
      oos_span_start_sec: 361.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 35.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_counter.009",
      relocation_score: 0,
      clip_start_time_sec: 358.0,
      clip_end_time_sec: 391.0,
      clip_duration_sec: 33.0,
      anchor_assoc_id: "cc058509b79d0313",
      anchor_name: "milk frother base",
      anchor_projected_pixel: [564.0755829530472, 596.9630525778609],
      anchor_world_coordinates: [
        -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_15",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:31.0 video 1>, is the previously moved pack of oranges visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: [-64.68518928131584, 978.5155828294107],
          camera_coordinates: [
            -1.1267138862989599, 0.40322598474729454, 0.5325130885104068,
          ],
          frame_index: 1583,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved pack of oranges last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 360.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:06:00.0 video 1>",
          projected_pixel: [1352.8965006996787, 912.6584318340222],
          normalized_projected_pixel: [0.9608639919742036, 0.6481949089730271],
          camera_coordinates: [
            0.8796031180020862, 0.2778624015617173, 0.6607064253541942,
          ],
          frame_index: 1583,
          status: "in_view",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved pack of oranges stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 52.766666666666666,
          last_placement_time_in_clip_sec: -305.23333333333335,
          last_placement_time_token: "<TIME 00:00:52.8 video 1>",
          projected_pixel: [824.8272249561401, 1096.3436425582445],
          normalized_projected_pixel: [0.5858147904518041, 0.778653155226026],
          camera_coordinates: [
            0.09726744699243639, 0.300345941185844, 0.45413175656108007,
          ],
          frame_index: 1583,
          status: "last_past_track_end",
          fixture: "P01_counter.009",
          world_coordinates: [
            -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
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
          "At the current time <TIME 00:06:31.0 video 1>, based on the last known position of the pack of oranges that was moved earlier,which fixture is closest to it?",
        choices: ["cupboard", "counter", "shelf", "fridgefreezer", "storage"],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 360.0,
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
            "At the current time <TIME 00:06:31.0 video 1>, the pack of oranges that was moved earlier is not visible. Based on its last known position, in which direction is the pack of oranges from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 1,
          answer_metadata: {
            reference_time_sec: 391.0,
            camera_coordinates: [
              -1.1267138862989599, 0.40322598474729454, 0.5325130885104068,
            ],
            world_coordinates: [
              -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
            ],
            status: "out_of_view",
            correct_label: "Front-left",
            debug: {
              x: -1.1267138862989599,
              z: 0.5325130885104068,
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
            "At the current time <TIME 00:06:31.0 video 1>, the pack of oranges that was moved earlier is not visible. Based on the last known position of the pack of oranges and the position of the marked milk frother base in the current frame, where is the pack of oranges relative to milk frother base from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "98dfab7aa5cc00f7",
            object_x_name: "pack of oranges",
            object_x_reference_time_sec: 391.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.658539415290321, -1.9715757629225228, -0.5743028923884317,
            ],
            object_x_camera_coordinates: [
              -1.1267138862989599, 0.40322598474729454, 0.5325130885104068,
            ],
            object_y_assoc_id: "cc058509b79d0313",
            object_y_name: "milk frother base",
            object_y_reference_time_sec: 391.0,
            object_y_world_coordinates: [
              -0.3831442795352723, -1.7256975792727327, -0.48525284987056416,
            ],
            object_y_projected_pixel: [564.0755829530472, 596.9630525778609],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:31.0 video 1>, the pack of oranges that was moved earlier is not visible. Based on the last known position of the pack of oranges, and the position of the marked milk frother base in the current frame, how far is the pack of oranges from themilk frother base?",
          choices: ["very close", "medium", "close", "far"],
          correct_idx: 1,
          answer_metadata: {
            object_x_assoc_id: "98dfab7aa5cc00f7",
            object_x_name: "pack of oranges",
            object_x_reference_time_sec: 391.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "cc058509b79d0313",
            object_y_name: "milk frother base",
            object_y_pixel: [564.0755829530472, 596.9630525778609],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.8417716822689968, 0.6345862777989935, -0.7640284252135088,
            ],
            distance_m: 1.3019288550358628,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h30p0_16: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "f421e886dd28b482",
    object_a_name: "right half of first orange",
    query_time_sec: 393.0,
    query_time_in_clip_sec: 33.0,
    clip_start_time_sec: 360.0,
    clip_end_time_sec: 393.0,
    clip_duration_sec: 33.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "f421e886dd28b482",
      object_name: "right half of first orange",
      query_time_sec: 393.0,
      oos_span_start_sec: 363.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 33.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 360.0,
      clip_end_time_sec: 393.0,
      clip_duration_sec: 33.0,
      anchor_assoc_id: "df43aa6f802d1561",
      anchor_name: "glass",
      anchor_projected_pixel: [381.1347518416107, 510.24228729942695],
      anchor_world_coordinates: [
        -0.4118175344125994, -1.6432337131449, -0.564058406845354,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_16",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:33.0 video 1>, is the previously moved right half of first orange visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            0.28142646922512826, 0.9687894614501453, -0.5945239917664704,
          ],
          frame_index: 6587,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved right half of first orange last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 362.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:06:02.0 video 1>",
          projected_pixel: [10.222500018310939, 854.6825863758452],
          normalized_projected_pixel: [
            0.007260298308459473, 0.6070188823692082,
          ],
          camera_coordinates: [
            -0.4108695262459934, 0.08893679624688655, 0.28220288462528687,
          ],
          frame_index: 6587,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved right half of first orange stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 219.56666666666666,
          last_placement_time_in_clip_sec: -140.43333333333334,
          last_placement_time_token: "<TIME 00:03:39.6 video 1>",
          projected_pixel: [720.4447451585418, 1025.326786012454],
          normalized_projected_pixel: [0.5116795065046461, 0.7282150468838452],
          camera_coordinates: [
            0.013386388605491462, 0.19565426269573016, 0.3704919754873659,
          ],
          frame_index: 6587,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
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
          "At the current time <TIME 00:06:33.0 video 1>, based on the last known position of the right half of first orange that was moved earlier,which fixture is closest to it?",
        choices: ["shelf", "oven", "counter", "sink", "storage"],
        correct_idx: 2,
        answer_metadata: {
          reference_time_sec: 362.0,
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
            "At the current time <TIME 00:06:33.0 video 1>, the right half of first orange that was moved earlier is not visible. Based on its last known position, in which direction is the right half of first orange from your viewpoint?",
          choices: ["Back-right", "Back-left", "Front-left", "Front-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 393.0,
            camera_coordinates: [
              0.28142646922512826, 0.9687894614501453, -0.5945239917664704,
            ],
            world_coordinates: [
              -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
            ],
            status: "out_of_view",
            correct_label: "Back-right",
            debug: {
              x: 0.28142646922512826,
              z: -0.5945239917664704,
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
            "At the current time <TIME 00:06:33.0 video 1>, the right half of first orange that was moved earlier is not visible. Based on the last known position of the right half of first orange and the position of the marked glass in the current frame, where is the right half of first orange relative to glass from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 3,
          acceptable_idxs: [3],
          answer_metadata: {
            object_x_assoc_id: "f421e886dd28b482",
            object_x_name: "right half of first orange",
            object_x_reference_time_sec: 393.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4580034190202618, -3.1567664291461943, -0.3333726755681461,
            ],
            object_x_camera_coordinates: [
              0.28142646922512826, 0.9687894614501453, -0.5945239917664704,
            ],
            object_y_assoc_id: "df43aa6f802d1561",
            object_y_name: "glass",
            object_y_reference_time_sec: 393.0,
            object_y_world_coordinates: [
              -0.4118175344125994, -1.6432337131449, -0.564058406845354,
            ],
            object_y_projected_pixel: [381.1347518416107, 510.24228729942695],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:33.0 video 1>, the right half of first orange that was moved earlier is not visible. Based on the last known position of the right half of first orange, and the position of the marked glass in the current frame, how far is the right half of first orange from theglass?",
          choices: ["close", "far", "very close", "medium"],
          correct_idx: 3,
          answer_metadata: {
            object_x_assoc_id: "f421e886dd28b482",
            object_x_name: "right half of first orange",
            object_x_reference_time_sec: 393.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "df43aa6f802d1561",
            object_y_name: "glass",
            object_y_pixel: [381.1347518416107, 510.24228729942695],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              0.6407448515145426, 1.1906674400214043, -1.2689598798638013,
            ],
            distance_m: 1.8543198467830384,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h30p0_17: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "56a389eb59ae14b8",
    object_a_name: "left half of third orange",
    query_time_sec: 396.0,
    query_time_in_clip_sec: 33.0,
    clip_start_time_sec: 363.0,
    clip_end_time_sec: 396.0,
    clip_duration_sec: 33.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "56a389eb59ae14b8",
      object_name: "left half of third orange",
      query_time_sec: 396.0,
      oos_span_start_sec: 366.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 30.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 363.0,
      clip_end_time_sec: 396.0,
      clip_duration_sec: 33.0,
      anchor_assoc_id: "e44a21e6e04d424c",
      anchor_name: "mug",
      anchor_projected_pixel: [932.7410084051845, 779.2522977861395],
      anchor_world_coordinates: [
        -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_17",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:36.0 video 1>, is the previously moved left half of third orange visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.11813554653868358, 0.9828248916444087, -0.932954074139319,
          ],
          frame_index: 9063,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved left half of third orange last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 365.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:06:05.0 video 1>",
          projected_pixel: [3.157344932936553, 748.8074931585314],
          normalized_projected_pixel: [
            0.0022424324807788017, 0.5318235036637297,
          ],
          camera_coordinates: [
            -0.4285784735661027, 0.02652480109076505, 0.295671845465844,
          ],
          frame_index: 9063,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved left half of third orange stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 302.1,
          last_placement_time_in_clip_sec: -60.89999999999998,
          last_placement_time_token: "<TIME 00:05:02.1 video 1>",
          projected_pixel: [804.4851841973324, 1008.0457580325485],
          normalized_projected_pixel: [0.5713673183219691, 0.7159415895117532],
          camera_coordinates: [
            0.06560722529627538, 0.18700720267064108, 0.3745001446473881,
          ],
          frame_index: 9063,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
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
          "At the current time <TIME 00:06:36.0 video 1>, based on the last known position of the left half of third orange that was moved earlier,which fixture is closest to it?",
        choices: ["sink", "oven", "bin", "counter", "drawer"],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 365.0,
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
            "At the current time <TIME 00:06:36.0 video 1>, the left half of third orange that was moved earlier is not visible. Based on its last known position, in which direction is the left half of third orange from your viewpoint?",
          choices: ["Back-left", "Front-left", "Back-right", "Front-right"],
          correct_idx: 0,
          answer_metadata: {
            reference_time_sec: 396.0,
            camera_coordinates: [
              -0.11813554653868358, 0.9828248916444087, -0.932954074139319,
            ],
            world_coordinates: [
              -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.11813554653868358,
              z: -0.932954074139319,
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
            "At the current time <TIME 00:06:36.0 video 1>, the left half of third orange that was moved earlier is not visible. Based on the last known position of the left half of third orange and the position of the marked mug in the current frame, where is the left half of third orange relative to mug from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "56a389eb59ae14b8",
            object_x_name: "left half of third orange",
            object_x_reference_time_sec: 396.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.4797284159068447, -3.200962390373321, -0.35444113901248764,
            ],
            object_x_camera_coordinates: [
              -0.11813554653868358, 0.9828248916444087, -0.932954074139319,
            ],
            object_y_assoc_id: "e44a21e6e04d424c",
            object_y_name: "mug",
            object_y_reference_time_sec: 396.0,
            object_y_world_coordinates: [
              -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
            ],
            object_y_projected_pixel: [932.7410084051845, 779.2522977861395],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:36.0 video 1>, the left half of third orange that was moved earlier is not visible. Based on the last known position of the left half of third orange, and the position of the marked mug in the current frame, how far is the left half of third orange from themug?",
          choices: ["far", "very close", "medium", "close"],
          correct_idx: 2,
          answer_metadata: {
            object_x_assoc_id: "56a389eb59ae14b8",
            object_x_name: "left half of third orange",
            object_x_reference_time_sec: 396.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "e44a21e6e04d424c",
            object_y_name: "mug",
            object_y_pixel: [932.7410084051845, 779.2522977861395],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.3902663605169364, 0.8980132202527118, -1.6438009549828416,
            ],
            distance_m: 1.9133262020633812,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h30p0_18: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "a955b01a2895c6f5",
    object_a_name: "one bag",
    query_time_sec: 396.0,
    query_time_in_clip_sec: 33.0,
    clip_start_time_sec: 363.0,
    clip_end_time_sec: 396.0,
    clip_duration_sec: 33.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "a955b01a2895c6f5",
      object_name: "one bag",
      query_time_sec: 396.0,
      oos_span_start_sec: 366.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 30.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 363.0,
      clip_end_time_sec: 396.0,
      clip_duration_sec: 33.0,
      anchor_assoc_id: "e44a21e6e04d424c",
      anchor_name: "mug",
      anchor_projected_pixel: [932.7410084051845, 779.2522977861395],
      anchor_world_coordinates: [
        -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_18",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:36.0 video 1>, is the previously moved one bag visible in the current frame?",
        choices: ["No", "Yes"],
        correct_idx: 0,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.12393606131996904, 1.0455168745448382, -0.9552336958423095,
          ],
          frame_index: 3828,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved one bag last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 365.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:06:05.0 video 1>",
          projected_pixel: [14.160860531448407, 748.838492007601],
          normalized_projected_pixel: [0.01005742935472188, 0.5318455198917621],
          camera_coordinates: [
            -0.4774214970751274, 0.030028595729089558, 0.34108544158609666,
          ],
          frame_index: 3828,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved one bag stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 127.6,
          last_placement_time_in_clip_sec: -235.4,
          last_placement_time_token: "<TIME 00:02:07.6 video 1>",
          projected_pixel: [802.3596099142155, 1149.3623076325753],
          normalized_projected_pixel: [0.5698576774958917, 0.8163084571254086],
          camera_coordinates: [
            0.06313268751820322, 0.26917400652587353, 0.3524596293163742,
          ],
          frame_index: 3828,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
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
          "At the current time <TIME 00:06:36.0 video 1>, based on the last known position of the one bag that was moved earlier,which fixture is closest to it?",
        choices: ["oven", "counter", "sink", "shelf", "storage"],
        correct_idx: 1,
        answer_metadata: {
          reference_time_sec: 365.0,
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
            "At the current time <TIME 00:06:36.0 video 1>, the one bag that was moved earlier is not visible. Based on its last known position, in which direction is the one bag from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 396.0,
            camera_coordinates: [
              -0.12393606131996904, 1.0455168745448382, -0.9552336958423095,
            ],
            world_coordinates: [
              -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.12393606131996904,
              z: -0.9552336958423095,
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
            "At the current time <TIME 00:06:36.0 video 1>, the one bag that was moved earlier is not visible. Based on the last known position of the one bag and the position of the marked mug in the current frame, where is the one bag relative to mug from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "a955b01a2895c6f5",
            object_x_name: "one bag",
            object_x_reference_time_sec: 396.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.5021785214456398, -3.2489955719874573, -0.39505047858190734,
            ],
            object_x_camera_coordinates: [
              -0.12393606131996904, 1.0455168745448382, -0.9552336958423095,
            ],
            object_y_assoc_id: "e44a21e6e04d424c",
            object_y_name: "mug",
            object_y_reference_time_sec: 396.0,
            object_y_world_coordinates: [
              -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
            ],
            object_y_projected_pixel: [932.7410084051845, 779.2522977861395],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:36.0 video 1>, the one bag that was moved earlier is not visible. Based on the last known position of the one bag, and the position of the marked mug in the current frame, how far is the one bag from themug?",
          choices: ["medium", "close", "very close", "far"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "a955b01a2895c6f5",
            object_x_name: "one bag",
            object_x_reference_time_sec: 396.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "e44a21e6e04d424c",
            object_y_name: "mug",
            object_y_pixel: [932.7410084051845, 779.2522977861395],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.3960668752982219, 0.9607052031531413, -1.6660805766858322,
            ],
            distance_m: 1.9635803892593273,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
  oos_staged_h30p0_19: {
    inputs: {
      "video 1": {
        id: "P01-20240202-110250",
      },
    },
    video_id: "P01-20240202-110250",
    object_a_assoc_id: "b671de6a85a09507",
    object_a_name: "left half of second orange",
    query_time_sec: 396.0,
    query_time_in_clip_sec: 33.0,
    clip_start_time_sec: 363.0,
    clip_end_time_sec: 396.0,
    clip_duration_sec: 33.0,
    horizon_sec: 30.0,
    generation_info: {
      video_id: "P01-20240202-110250",
      assoc_id: "b671de6a85a09507",
      object_name: "left half of second orange",
      query_time_sec: 396.0,
      oos_span_start_sec: 366.0,
      oos_span_end_sec: 396.0,
      oos_duration_sec: 30.0,
      horizon_sec: 30.0,
      fixture_at_query: "P01_counter.007",
      relocation_score: 0,
      clip_start_time_sec: 363.0,
      clip_end_time_sec: 396.0,
      clip_duration_sec: 33.0,
      anchor_assoc_id: "e44a21e6e04d424c",
      anchor_name: "mug",
      anchor_projected_pixel: [932.7410084051845, 779.2522977861395],
      anchor_world_coordinates: [
        -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
      ],
      anchor_status: "in_view",
    },
    question_class: "oos_staged_trajectory",
    trajectory_id: "oos_staged_h30p0_19",
    num_incremental_steps: 4,
    num_branch_steps: 3,
    terminated_at_step: 4,
    stop_reason: "completed_out_of_sight_trajectory",
    incremental_steps: [
      {
        step: 1,
        question_class: "oos_step1_visibility",
        question:
          "At the current time <TIME 00:06:36.0 video 1>, is the previously moved left half of second orange visible in the current frame?",
        choices: ["Yes", "No"],
        correct_idx: 1,
        answer_metadata: {
          status: "out_of_view",
          is_visible: false,
          is_stably_visible: false,
          projected_pixel: null,
          camera_coordinates: [
            -0.12654309091724858, 1.005090586053089, -0.9291966014111066,
          ],
          frame_index: 7166,
        },
      },
      {
        step: 2,
        question_class: "oos_step2_last_visible",
        question:
          "When was the previously moved left half of second orange last visible, and where was it located in the image at that moment?",
        choices: [],
        correct_idx: null,
        answer_metadata: {
          sampled_last_visible_time_sec: 365.0,
          sampled_last_visible_time_in_clip_sec: 2.0,
          sampled_last_visible_time_token: "<TIME 00:06:05.0 video 1>",
          projected_pixel: [20.76983150574779, 759.3071665500224],
          normalized_projected_pixel: [
            0.014751300785332237, 0.5392806580610955,
          ],
          camera_coordinates: [
            -0.4357978819739534, 0.03440551970738226, 0.3172667746763762,
          ],
          frame_index: 7166,
          status: "in_view",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.490592956085781, -3.206692348204073, -0.3751702465967427,
          ],
          reference_source: "precomputed_visibility_track",
          note: "Uses the precomputed visibility track when available and otherwise falls back to live visibility computation over stable-visible states only. If the last visible state is in_motion, the trajectory is skipped.",
        },
      },
      {
        step: "3",
        question_class: "oos_step3_last_placement",
        question: [
          "At what time did the previously moved left half of second orange stop moving? Where was it located in the image at that moment?",
        ],
        choices: [],
        correct_idx: null,
        answer_metadata: {
          last_placement_time_sec: 238.86666666666667,
          last_placement_time_in_clip_sec: -124.13333333333333,
          last_placement_time_token: "<TIME 00:03:58.9 video 1>",
          projected_pixel: [758.5784242534854, 994.2396678223907],
          normalized_projected_pixel: [0.538763085407305, 0.7061361277147662],
          camera_coordinates: [
            0.037829224050304866, 0.18176853320196584, 0.3832317620280017,
          ],
          frame_index: 7166,
          status: "last_past_track_end",
          fixture: "P01_counter.007",
          world_coordinates: [
            -1.490592956085781, -3.206692348204073, -0.3751702465967427,
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
          "At the current time <TIME 00:06:36.0 video 1>, based on the last known position of the left half of second orange that was moved earlier,which fixture is closest to it?",
        choices: ["shelf", "sink", "storage", "counter", "bin"],
        correct_idx: 3,
        answer_metadata: {
          reference_time_sec: 365.0,
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
            "At the current time <TIME 00:06:36.0 video 1>, the left half of second orange that was moved earlier is not visible. Based on its last known position, in which direction is the left half of second orange from your viewpoint?",
          choices: ["Back-right", "Front-right", "Front-left", "Back-left"],
          correct_idx: 3,
          answer_metadata: {
            reference_time_sec: 396.0,
            camera_coordinates: [
              -0.12654309091724858, 1.005090586053089, -0.9291966014111066,
            ],
            world_coordinates: [
              -1.490592956085781, -3.206692348204073, -0.3751702465967427,
            ],
            status: "out_of_view",
            correct_label: "Back-left",
            debug: {
              x: -0.12654309091724858,
              z: -0.9291966014111066,
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
            "At the current time <TIME 00:06:36.0 video 1>, the left half of second orange that was moved earlier is not visible. Based on the last known position of the left half of second orange and the position of the marked mug in the current frame, where is the left half of second orange relative to mug from your viewpoint?",
          choices: ["Front-left", "Front-right", "Back-left", "Back-right"],
          correct_idx: 2,
          acceptable_idxs: [2],
          answer_metadata: {
            object_x_assoc_id: "b671de6a85a09507",
            object_x_name: "left half of second orange",
            object_x_reference_time_sec: 396.0,
            object_x_status: "out_of_view",
            object_x_world_coordinates: [
              -1.490592956085781, -3.206692348204073, -0.3751702465967427,
            ],
            object_x_camera_coordinates: [
              -0.12654309091724858, 1.005090586053089, -0.9291966014111066,
            ],
            object_y_assoc_id: "e44a21e6e04d424c",
            object_y_name: "mug",
            object_y_reference_time_sec: 396.0,
            object_y_world_coordinates: [
              -0.5126643568922444, -1.5556944653816156, -0.4911807318814719,
            ],
            object_y_projected_pixel: [932.7410084051845, 779.2522977861395],
            reference_source:
              "query_time_state_from_merged_tracks_or_live_state",
          },
        },
        {
          step: "5c",
          depends_on_steps: [1, 2, 3, 4],
          branch_group: "post_step4",
          question_class: "oos_branch_object_object_distance",
          question:
            "At the current time <TIME 00:06:36.0 video 1>, the left half of second orange that was moved earlier is not visible. Based on the last known position of the left half of second orange, and the position of the marked mug in the current frame, how far is the left half of second orange from themug?",
          choices: ["medium", "close", "far", "very close"],
          correct_idx: 0,
          answer_metadata: {
            object_x_assoc_id: "b671de6a85a09507",
            object_x_name: "left half of second orange",
            object_x_reference_time_sec: 396.0,
            object_x_status_from_track: "out_of_view",
            object_y_assoc_id: "e44a21e6e04d424c",
            object_y_name: "mug",
            object_y_pixel: [932.7410084051845, 779.2522977861395],
            object_y_status: "in_view",
            vector_object_x_relative_to_object_y: [
              -0.3986739048955014, 0.9202789146613921, -1.6400434822546293,
            ],
            distance_m: 1.9223935046969096,
            distance_bucket: "medium",
            reference_source: {
              object_x: null,
              object_y: "key_frame_generator_selected_anchor",
            },
          },
        },
      ],
    },
  },
};
export const VIDEO: VideoEntry = {
  id: "P01-20240202-110250",
  label: "P01 — 2024-02-02 11:02",
  sampledUrl:
    "https://www.youtube.com/watch?v=49EiUzdzwfk&list=PLN5Krxli5ta_d_Q5sTa1HjuDrF1ATvciV&index=29",
  fullUrl:
    "https://www.youtube.com/watch?v=49EiUzdzwfk&list=PLN5Krxli5ta_d_Q5sTa1HjuDrF1ATvciV&index=29",
  duration: 220,
  trajectory: TRAJECTORY,
  rawJson: { TRAJECTORY },
};
